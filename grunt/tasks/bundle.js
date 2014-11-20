var fs = require('fs');
var browserify = require('browserify');
var xtend = require('xtend');

var opts = {
	debug:true
}

// this works
//var b = browserify(xtend(opts, {entries: ['./src/js/main.js']}));
// so does this
// b.add('./src/js/main.js')

// Main Entry
browserify(opts)
	.add('./src/js/main.js')
	.external('./src/js/a.js')
	.bundle().pipe(fs.createWriteStream('./dist/js/dist.main.js'));


// Common Modules
browserify(opts)
	.require('./src/js/common.js', {expose: './src/js/common.js'})
	.bundle().pipe(fs.createWriteStream('./dist/js/dist.common.js'));


// a.js
browserify(opts)
	.require('./src/js/a.js', {expose: './src/js/a.js'})
	.external(['./src/js/b.js', './src/js/common.js'])
	.bundle().pipe(fs.createWriteStream('./dist/js/dist.a.js'));


// b.js
browserify(opts)
	.require('./src/js/b.js', {expose: './src/js/b.js'})
	.external('./src/js/common.js')
	.bundle().pipe(fs.createWriteStream('./dist/js/dist.b.js'));
