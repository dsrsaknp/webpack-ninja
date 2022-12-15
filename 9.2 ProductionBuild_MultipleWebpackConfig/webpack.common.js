const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

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
    module: {
        rules: [
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
    ],
    optimization: {
        // needed when dependency is updated in the bundle, 
        // new hash version is created and hence the file bundles version
        splitChunks: {
            chunks: "all",
        },
    },
};
