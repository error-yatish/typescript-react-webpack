const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: ["./src/app.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
    ]
  }
};

module.exports = config;