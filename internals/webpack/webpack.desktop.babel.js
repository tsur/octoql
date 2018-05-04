const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'electron-main',

  entry: path.resolve(process.cwd(), 'src', 'ui', 'app.js'),

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.css$/,
        include: [/node_modules/, /QueryPanel[/|\\]theme/],
        loaders: [
          { loader: 'style-loader', options: { convertToAbsoluteUrls: false } },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

  ],

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },
};
