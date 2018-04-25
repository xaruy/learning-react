var path = require('path')

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    mode: 'development'
}