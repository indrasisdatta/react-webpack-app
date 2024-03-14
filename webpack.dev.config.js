const { merge } = require("webpack-merge");
const commonWebpack = require("./webpack.config");

module.exports = merge(commonWebpack, {
  mode: "development",
  devServer: {
    port: 3000,
    static: ["./src", "./public"],
    hot: true,
    historyApiFallback: true,
  },
});
