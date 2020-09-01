const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './app.js',
  output: {
    // path: __dirname + "/dist",
    path: path.resolve(__dirname, '../dist'),
    // filename: "bundle.js"
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        // 解析jsx文件类型
        test: /\.jsx?$/,
        // 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.js$/, // 匹配.js文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      //配置sass
      // {
      //   test: /\.s(a|c)ss$/,
      //   use: [{
      //     loader: 'css-loader'
      //   }, {
      //     loader: 'sass-loader'
      //   }],
      // },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../dist'
            }
          },
          "css-loader", "sass-loader"
        ]
      },
    ]
  },
  // 文件引用不需要后缀名 import xx from 'xxx'
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    inline: true, //实时刷新
    hot: true, // 模块热替换机制
    host: 'localhost', //设置服务器的主机号，默认是localhost 10.190.177.40
    port: 9000,
    compress: true,
    open: false, // 打开浏览器，默认false
    proxy: {
      '/toutiao/index': {
        target: 'http://v.juhe.cn/',
        changeOrigin: true,
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ //打包输出HTML
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css',
    //   allChunks: true,
    // }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css",
      chunkFilename: "static/css/[id].[contenthash].css"
    }),
    new OptimizeCSSPlugin({}),
    new CleanWebpackPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],
  devtool: false, // 开启调试
  mode: "production",
}