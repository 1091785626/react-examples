'use strict';
/*eslint no-console: 0*/
console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.dist.js');

const isDeveloping = process.env.NODE_ENV === 'development';
const port = isDeveloping ? 8080 : 9090;

function baseConfig(config) {
  return new webpackDevServer(webpack(config), {
    historyApiFallback: true,
    hot: true,
    //noInfo: true,//打印信息报错之类的
    inline: true,
    progress: true,
    contentBase: './',
    stats: { colors: true } // 用颜色标识
  });
}

let server;
if(isDeveloping) {
  server = baseConfig(devConfig);
  console.log("development mode...");
} else {
  server = baseConfig(prodConfig);
  console.log("production mode...");
}

server.listen(port, "localhost", function(err) {
  if(err) {
    console.log(err);
  }
  console.log('==> 🌎 Listening on ' + process.env.NODE_ENV + ' port ' + port);
});
