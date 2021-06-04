const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require("path");

const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, "src", "index.js")],
    devtool: 'inline-source-map', // Create source maps to help you with debugging
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
            test: /.(jpg|jpeg|png|gif|ico|svg)$/,
            loader: 'file-loader'
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
          }),
        new FaviconsWebpackPlugin('./public/favicon.png'),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),

    ],
    resolve: {
        // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx']
    }, 
    devServer: {
        port: port,
        historyApiFallback: true,
        proxy: {
            "/weatherApi": "http://localhost:3001"
        }
    },
}