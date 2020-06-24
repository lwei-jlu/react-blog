const path = require("path")
const webpack = require("webpack")
const  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
// 入口文件
  entry: './app.js',
  output: {
    // path: __dirname + "/dist",
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
      // 解析jsx文件类型
        test:/\.jsx?$/,
        // 
        use:{
          loader:"babel-loader",
          options:{
           presets:["@babel/env","@babel/react"]
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
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
       },
       {
         test: /\.ts(x?)$/,
         use: [
           {
             loader: 'awesome-typescript-loader',
             options: {}
           }
         ]
       }
    ]
  },
  // 文件引用不需要后缀名 import xx from 'xxx'
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] 
  },
  devServer: {
    inline: true, //实时刷新
    hot: true, // 模块热替换机制
    host: '10.190.177.40', //设置服务器的主机号，默认是localhost 10.190.177.40
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
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: 'index.html'
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "source-map", // 开启调试
  mode: "development"
}