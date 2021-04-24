const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
    target: 'node',//打包服务器端代码
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]]
                }

            }
        ]
    }
}