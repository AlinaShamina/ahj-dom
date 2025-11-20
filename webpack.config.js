const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/ahj-dom/',  
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
  template: './src/index.html',
}),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    devMiddleware: {
      publicPath: '/ahj-dom/',
    },
    open: true,
  },
  mode: 'development',
};
