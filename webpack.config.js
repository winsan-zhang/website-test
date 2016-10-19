
module.exports = {

    devtool: 'eval-source-map',
    entry: __dirname +  '/app/scripts/main.js',
    output: {
        path: __dirname + '/public',
        filename: bundle.js
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            }
        ]
    }

}