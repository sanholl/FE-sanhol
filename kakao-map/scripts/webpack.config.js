const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 번들링이 일어날때 css 파일을 별도의 파일로 호환하겠다는 플러그인

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'static/js/[name].[contenthash:8].js',
    clean: true
  },
  devtool: isProduction ? false : 'eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    client: {
      overlay: true,
      progress: true
    }
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader'
            ]
          }
        ]
      }
    ]
  },
  plugins: [ isProduction ? new HtmlWebpackPlugin({
    template: 'public/index.html',
    minify: true
  }) :
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    isProduction ? new MiniCssExtractPlugin({
      linkType: false,
      filename: '[name].[contenthash:8].css'
    }) : undefined
  ].filter(Boolean)
}