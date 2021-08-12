const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [],
        symlinks: false
    },
    module: {
        rules: []
    },
    plugins: [],
    node: {
        fs: 'empty'
    }
}