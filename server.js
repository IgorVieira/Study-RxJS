'use strict'

let http  = require('http');
let app = require('./config/koa')();

http.createServer(app.callback()).listen();
console.log('server is running ');
