const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports.COMMON_PROCESS_ENV = {
  APP_NAME: JSON.stringify("React Webpack App"),
};

module.exports.webpackConfig = {
  entry: "./src/index.js",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ProvidePlugin({
      process: "process/browser",
    }),
  ],
  resolve: {
    alias: {
      "react/jsx-dev-runtime.js": "react/jsx-dev-runtime",
      "react/jsx-runtime.js": "react/jsx-runtime",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
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
