const path = require('path');

module.exports = {
    entry: './main.js', // main2.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}