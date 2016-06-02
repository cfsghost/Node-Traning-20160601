var koa = require('koa');
var Router = require('koa-router');
var serve = require('koa-static');
var app = koa();

var router = new Router();

router.get('/static.js', function *() {
	this.body = 'HOME';
});

app.use(router.middleware());
app.use(serve('./'));
app.listen(process.env.PORT);
