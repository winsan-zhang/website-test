
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devtool: 'eval-source-map',
    entry: __dirname +  '/app/scripts/main.js',
    output: {
        path: __dirname + '/public',
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
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss'
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
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

    ],
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }

}