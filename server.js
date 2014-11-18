// Config
var port = Number(process.argv[2]);


var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port || 8080);