module.exports = function () {
	var common = require('./common.js')();
	var b = require('./b.js');
	console.log('in a ', b, common)
}
