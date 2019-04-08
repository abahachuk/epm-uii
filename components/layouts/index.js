import React from 'react';
import Head from 'next/head';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import Footer from '../organisms/Footer';
import { fetchCountry } from '../../redux/actions/country.action';

class Layout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchCountry());
  }

  render() {
    const { children, country, data } = this.props;
    const { error, footers } = data;

    if (error) {
      return (<span>Error loading data.</span>);
    }

    if (footers && footers.length === 1) {
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
          <Footer footer={footers[0]} country={country} />
        </div>
      );
    }

    return null;
  }
}

const query = gql`
{
  footers(where: {name: "main"}) {
    nav: navigation{
      links {
        label
        url
      }
    }
    instagram {
      url
    }
    video {
      url
    }
  }
}
`;

const mapStateToProps = ({ country, footer }) => {
  return {
    country,
  };
};

const withGraphql = graphql(query, {
  props: ({ data }) => ({
    data,
  })
})(Layout);

export default connect(
  mapStateToProps,
)(withGraphql);


