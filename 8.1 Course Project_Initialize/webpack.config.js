const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: "images/[hash][ext]",
        clean: true   // to clean dist folder everytime webpack runs the build
    },
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.(png|jpeg|gif|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /.(ttf|woff|woff2)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['index'],
            filename: 'index.html'
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/courses.html'),
            chunks: ['courses'],
            filename: 'courses.html'
        })
    ]
}