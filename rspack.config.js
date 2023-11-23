/**
 * @type {import('@rspack/cli').Configuration}
 */
const rspack = require('@rspack/core')

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.jsx",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
  ]
};
