function callback () {
	console.log('in main')
	var a = require('./a.js');
	a();
};

window.yepnope([{
    load:         ['/dist/js/dist.common.js','/dist/js/dist.a.js', '/dist/js/dist.b.js'],
    complete: callback
}]);
