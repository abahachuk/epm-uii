const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withCSS = require('@zeit/next-css');

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

    return config;
  },
})));