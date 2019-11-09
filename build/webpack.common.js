const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outputPath: "images/",
              limit: 1024 * 5,
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 2 } },
          { loader: 'sass-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'css/font/',
              limit: 1024
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "../src/assets"),
        to: "assets",
      },
    ])
  ]
}