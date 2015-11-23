'use strict'

let koa = require('koa')
let server = require('koa-static');
let routes = require('koa-route');


module.exports = () => {

	let app = koa();

	app.use(server('public'));
	app.listen(3000);

	return app;
}


