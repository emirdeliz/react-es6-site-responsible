'use strict';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    devtool: 'source-map',
    devServer: {
        noInfo: true,
        inline: true
    },
    entry: [
        'webpack/hot/dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader'}
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {compact: false}
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Bravi Site',
            template: './src/index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets/imgs', to: 'imgs'
        }])
    ]
};
