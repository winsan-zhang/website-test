
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

    devtool: 'eval-source-map',
    entry: {
        app:__dirname +  '/app/scripts/main.js',
        vendors: ['jquery', 'react', 'react-dom']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
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
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss')
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!postcss!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [

        new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery" : "jquery"
        })
    ]

};