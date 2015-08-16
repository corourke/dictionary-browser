var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("/home/nitrous/code/server/"));
app.listen(8080);