var koa = require('koa');
var Router = require('koa-router');
var views = require('koa-views');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var app = koa();

app.use(bodyParser());
app.use(views(__dirname + '/views', {
	extension: 'pug',
	map: {
		html: 'pug'
	}
}));

var router = new Router();

var messages = [
	{ name: 'Fred', msg: 'Hello~' }
];

router.get('/', function *() {
	yield this.render('index', { messages: messages });
});

router.get('/leavemsg', function *() {
	yield this.render('leavemsg');
});

router.post('/leavemsg', function *() {

	messages.push({
		name: this.request.body.name,
		msg: this.request.body.msg
	});

	this.redirect('/');
});

app.use(router.middleware());
app.use(serve(__dirname + '/public'));
app.listen(process.env.PORT);
