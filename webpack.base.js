module.exports={
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