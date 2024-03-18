const { merge } = require("webpack-merge");
const commonWebpack = require("./webpack.config");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { DefinePlugin } = require("webpack");

module.exports = merge(commonWebpack.webpackConfig, {
  mode: "production",
  output: {
    path: __dirname + "/build-uat",
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        ...commonWebpack.COMMON_PROCESS_ENV,
        APP_MODE: JSON.stringify("UAT"),
      },
    }),
    new BundleAnalyzerPlugin(),
  ],
});
