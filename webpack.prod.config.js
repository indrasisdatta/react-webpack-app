const { merge } = require("webpack-merge");
const commonWebpack = require("./webpack.config");

module.exports = merge(commonWebpack, {
  mode: "production",
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    clean: true,
  },
});
