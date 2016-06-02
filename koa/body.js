var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var app = koa();
app.use(bodyParser());

var router = new Router();

router.get('/', function *() {
 this.body = '<form action="/" method="POST">' +
 '<input type="TEXT" name="id">' +
 '<input type="submit">' +
 '</form>';
});

router.post('/', function *() {
 this.body = this.request.body.id;
});

app.use(router.middleware());
app.listen(process.env.PORT);
