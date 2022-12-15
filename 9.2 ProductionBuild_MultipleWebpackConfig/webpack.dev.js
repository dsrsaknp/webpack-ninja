const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.common');

const purgePath = {
  src: path.join(__dirname, 'src')
};

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', "css-loader", "sass-loader"],
      }
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({}),
  ],
  optimization: {
    // needed when dependency is updated in the bundle, new hash version is created and hence the file bundles version
    splitChunks: {
      chunks: "all",
    },
  },
});