var koa = require('koa');
var Router = require('koa-router');
var app = koa();

var router = new Router();

router.get('/', function *() {
	this.body = 'HOME';
});

router.get('/second', function *() {
	this.body = 'SECOND';
});

router.get('/google', function *() {
	this.status = 301;
	this.redirect = 'http://www.google.com/';
});

app.use(router.middleware());
app.listen(process.env.PORT);
