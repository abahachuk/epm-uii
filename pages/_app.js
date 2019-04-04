import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import React from 'react';

import Layout from '../layouts';
import withData from '../lib/apollo';
import withReduxStore from '../lib/redux';


// Import CSS reset and Global Styles
import '../scss/main.scss';
import '../static/images/sprite.svg';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(withData(MyApp));