const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withCSS = require('@zeit/next-css');
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = withTypescript(withCSS(withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.(svg|jpg|png|gif|eot|ttf|woff|woff2)$/,
      exclude: /sprite\.svg$/,
      use: {
        loader: 'file-loader',
      },
    });

    config.module.rules.push({
      test: /sprite\.svg$/,
      use: {
        loader: 'svg-sprite-loader',
        options: {
          extract: false,
        },
      },
    });

    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]


    return config;
  },
})));