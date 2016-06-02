var koa = require('koa');
var Router = require('koa-router');
var views = require('koa-views');
var bodyParser = require('koa-bodyparser');
var websockify = require('koa-websocket');
var events = require('events');
var app = koa();
var socket = websockify(app);

app.use(bodyParser());
app.use(views(__dirname + '/views', {
	extension: 'pug',
	map: {
		html: 'pug'
	}
}));

var wsRouter = new Router();
wsRouter.get('/abc', function *() {
	console.log('Connected');
	this.websocket.send('Welcome');
	this.websocket.on('message', function(msg) {
		eventEmitter.emit('update', msg);
		console.log(msg);
	});

	var self = this;
	eventEmitter.on('update', function(message) {
		console.log('Ready to send ', message);
		self.websocket.send(message);
	});
});

app.ws
	.use(wsRouter.routes())
	.use(wsRouter.allowedMethods());

var router = new Router();

var eventEmitter = new events.EventEmitter();

router.get('/', function *() {
	yield this.render('home');
});

app.use(router.middleware());
app.listen(process.env.PORT);
