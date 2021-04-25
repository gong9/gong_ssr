const path = require('path')
const nodeExternals = require('webpack-node-externals')

// 怎么同时打包客户端js和返回去的html串


module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
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

        }]
    }
}