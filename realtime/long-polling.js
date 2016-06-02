var koa = require('koa');
var Router = require('koa-router');
var views = require('koa-views');
var events = require('events');
var app = koa();

app.use(views(__dirname + '/views', {
	extension: 'pug',
	map: {
		html: 'pug'
	}
}));

var router = new Router();

var eventEmitter = new events.EventEmitter();

var counter = 0;
setInterval(function() {
	counter++;
	eventEmitter.emit('update', counter);
}, 1000);

router.get('/', function *() {
	yield this.render('long-polling');
});

router.get('/poll', function *() {
	this.body = yield function(done) {
		eventEmitter.once('update', function(message) {
			done(null, message);
		});
	};
});

app.use(router.middleware());
app.listen(process.env.PORT);
