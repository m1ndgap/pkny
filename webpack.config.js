const path = require(`path`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, `public`)
    },
    devServer: {
        host: '0.0.0.0',
        // watchFiles: {
        //     paths: ['src/svgs/**/*.svg','src/fonts/**/*.woff','src/fonts/**/*.woff2'],
        //     // options: {
        //     //     usePolling: false,
        //     // },
        // },
        disableHostCheck: true,
        historyApiFallback: true,
        useLocalIp: true,
        contentBase: path.join(__dirname, `public`),

        open: false,
        port: 1337,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
            {
                test: /\.(sass|scss|css)$/,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
            chunkFilename: "[id].css",
        }),
        // new SVGSpritemapPlugin( './src/svgs/**/*.svg' ,{
        //     output: {
        //         filename: "./img/svg-sprite.svg"
        //     },
        // }),
    ],
    devtool: `source-map`,
};
