var koa = require('koa');
var session = require('koa-session');
var app = koa();

app.keys = [ 'asdfs)#$L:Idslfafh.zxcv8' ];
app.use(session(app));

app.use(function *(){
 var count = this.session.count || 0;
 count++;
 this.session.count = count;
 this.body = this.session.count;
});

app.listen(process.env.PORT);
