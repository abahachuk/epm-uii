import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import Footer from '../components/organisms/Footer';
import data from '../data.json'; // TODO: temp solution
import { fetchCountry } from '../redux/actions/countries.action';

class Layout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchCountry());
  }

  render() {
    const { children, country } = this.props;
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
        <Footer footer={data.footer} country={country} />
      </div>
    );
  }
}

const mapStateToProps = ({ countries: { currentCountry } }) => {
  return {
    country: currentCountry
  };
};

export default connect(
  mapStateToProps,
)(Layout);
