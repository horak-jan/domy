const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "./public/build");
const APP_DIR = path.resolve(__dirname, "./client");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: APP_DIR + "/index.js",
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR,
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"],
          },
        },
      },
    ],
  },
};
