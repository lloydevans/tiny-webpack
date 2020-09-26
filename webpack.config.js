const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
    /**
     * Build options.
     */
    env = { ...{ prod: false }, ...env };

    /**
     * @type {import("webpack").Configuration}
     */
    let config = {
        entry: './src/index.js',

        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'build'),
        },

        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },

        plugins: [
            // Auto generate HTML
            new HtmlWebpackPlugin(),
        ],

        mode: env.prod ? 'production' : 'development',
    };

    return config;
};
