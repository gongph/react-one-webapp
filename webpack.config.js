const path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: 'cheap-inline-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}