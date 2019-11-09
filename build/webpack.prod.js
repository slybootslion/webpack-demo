const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

const prod = {
  mode: "production",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(common, prod)