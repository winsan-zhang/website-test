
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    devtool: 'eval-source-map',
    entry: {
        index: __dirname +  '/app/scripts/main-index.js',
        signUp: __dirname +  '/app/scripts/main-signUp.js',
        vendors: ['jquery', 'react', 'react-dom']
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
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
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss')
            },
            {
                test: /\.scss$/,
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
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html',
            chunk: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
           template: __dirname + '/app/signUp.tmpl.html',
            chunk: ['signUp'],
            filename: 'signUp.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin('[name].css')

    ],
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }

}