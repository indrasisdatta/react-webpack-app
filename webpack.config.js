const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    static: ["./src", "./public"],
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    process.env.NODE_ENV !== "local" ? new BundleAnalyzerPlugin() : "",
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
        // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
};