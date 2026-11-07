const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/i, // Case-insensitive matching
                exclude: /node_modules/,     // Keep this to exclude node_modules
                use: {
                    loader: 'babel-loader',    // or 'ts-loader' if using TypeScript
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                }
                            ] // Required for React 19 JSX
                        ]
                    }
                }
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.module\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                namedExport: false, // Fixes "Cannot read properties of undefined"
                                exportLocalsConvention: 'asIs',
                            }
                        },
                    },
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    experiments: {
        // Enables the built-in CSS support of webpack
        css: false,
    },
};
