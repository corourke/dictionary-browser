var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("."));
app.listen(process.env.PORT, process.env.IP);