var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  // 使用webpack-hot-middleware 实现热加载，不适用webpackDevServer  可以自己定义 服务
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    
    // 设置当前环境为开发环境
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // 这里是对应 webpack-hot-middleware 的插件配置
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    //webpack 插件在webpack 打包中简化了 生成html 文件的过程，特别是在文件名包含hash 值时，并且每次编译后都会改变的情况下非常有用，
    new HtmlWebpackPlugin({
      // 自动生成的HTML 文件的名称，默认是index.html ,你可以在这里指定子目录（assets/admin.html）
      filename: 'index.html',
      //  模板的路径，支持加载器， 例如 HTML！ ./index.html
      template: 'index.html',
      //inject :true   把所有的产出文件 注入到给定的template 或者templateContent,
      // 如果是true 或者“body ”  表示所有的javaScript 资源被放置在body 元素的底部，
      //  "head" 则会放在head元素内
      inject: true
    })
  ]
})
