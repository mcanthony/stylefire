var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './global',
  output: {
    path: __dirname + '/dist',
    filename: 'stylefire.min.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname), 'node_modules']
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      minimize: true
    })
  ]
};
