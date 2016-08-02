var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(8080);

console.log('Running on http://localhost:' + 8080);