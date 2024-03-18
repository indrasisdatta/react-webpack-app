const { merge } = require("webpack-merge");
const commonWebpack = require("./webpack.config");
const { DefinePlugin } = require("webpack");

module.exports = merge(commonWebpack.webpackConfig, {
  mode: "development",
  devServer: {
    port: 3000,
    static: ["./src", "./public"],
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        ...commonWebpack.COMMON_PROCESS_ENV,
        APP_MODE: JSON.stringify("Local"),
      },
    }),
  ],
});
