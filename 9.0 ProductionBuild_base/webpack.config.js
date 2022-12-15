const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob');

const purgePath = {
  src: path.join(__dirname, 'src')
};

module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      //shimming
      mnt: 'moment'
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/courses.html",
      chunks: ["courses"],
      filename: "courses.html",
      base: "pages",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: path.resolve(__dirname, "dist", "assets", "images"),
        },
      ],
    }),

    // css splitting
    new MiniCssExtractPlugin(),

    new PurgeCSSPlugin({
      // removing dead css/ unused css
      paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
      // safelist: ['dummy-css']
    }),
    // new BundleAnalyzerPlugin({}),
  ],
  optimization: {
    // needed when dependency is updated in the bundle, new hash version is created and hence the file bundles version
    splitChunks: {
      chunks: "all",
    },
  },
};
