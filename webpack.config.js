module.exports = {
    entry: './index.tsx',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            plugins: [
                new TsconfigPathsPlugin({
                    baseUrl: __dirname,
                    extensions: ['.js', '.ts', '.tsx'],
                }),
            ],
        },
    },
};
