var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
 
var compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  //这里如果页面里相同访问路径的静态资源同名的文件，内存中的不生效
  filename: 'bundle.js',
  //middleware把内存中的资源 绑定到 server的路径，也就是在html里访问的路径
  //注意这里不要和静态资源冲突
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});