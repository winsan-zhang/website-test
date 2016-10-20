
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devtool: 'eval-source-map',
    entry: __dirname +  '/app/scripts/main.js',
    output: {
        path: __dirname + '/dist',
        filename: index_bundle.js
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
                loader: 'style-loader!css-loader!postcss'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!postcss!sass-loader?outputStyle=expanded'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [

    	new webpack.optimize.OccureanceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin(),
    	new HtmlWebpackPlugin({
    		template: __dirname + '/app/index.tmpl.html'
    	})
    ]

}