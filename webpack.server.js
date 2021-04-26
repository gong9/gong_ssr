const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')
const serverConfig = {
    target: 'node',//打包服务器端代码
    mode:'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],

}
module.exports = merge(baseConfig, serverConfig)
