import Layout from '../layouts';
import withData from '../lib/apollo';


// Import CSS reset and Global Styles
import '../scss/main.scss';
import '../static/images/sprite.svg';

import App, { Container } from 'next/app';
import React from 'react';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
export default withData(MyApp);