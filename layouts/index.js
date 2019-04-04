import React from 'react';
import Head from 'next/head';
import Footer from '../components/organisms/Footer';
import data from '../data.json'; // TODO: temp solution

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />
        </Head>
        <div>{children}</div>
        <Footer footer={data.footer} country={data.country} />
      </div>
    );
  }
}

export default Layout;