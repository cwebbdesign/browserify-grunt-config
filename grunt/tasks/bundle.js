var fs = require('fs');
var browserify = require('browserify');
var xtend = require('xtend');

var opts = {
	debug:true
}

// this works
//var b = browserify(xtend(opts, {entries: ['./src/js/main.js']}));

// so does this
var b = browserify(opts);
b.add('./src/js/main.js')
b.external('./src/js/a.js');
b.bundle().pipe(fs.createWriteStream('./dist/js/dist.main.js'));

var c = browserify(opts);
c.require('./src/js/a.js', {expose: './src/js/a.js'});
c.external(['./src/js/b.js', './src/js/common.js']);
c.bundle().pipe(fs.createWriteStream('./dist/js/dist.a.js'));

var d = browserify(opts);
d.require('./src/js/b.js', {expose: './src/js/b.js'});
d.external('./src/js/common.js')
d.bundle().pipe(fs.createWriteStream('./dist/js/dist.b.js'));

var common = browserify(opts);
common.require('./src/js/common.js', {expose: './src/js/common.js'});
common.bundle().pipe(fs.createWriteStream('./dist/js/dist.common.js'));
