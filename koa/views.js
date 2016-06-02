var koa = require('koa');
var Router = require('koa-router');
var views = require('koa-views');
var app = koa();

app.use(views(__dirname + '/views', {
	extension: 'pug',
	map: {
		html: 'pug'
	}
}));

var router = new Router();

router.get('/', function *() {
	yield this.render('home', {
		members: [
			{ name: 'Fred', gender: 'm' },
			{ name: 'Fred', gender: 'm' },
			{ name: 'Fred', gender: 'm' },
			{ name: 'Fred', gender: 'm' }
		]
	});
});

app.use(router.middleware());
app.listen(process.env.PORT);
