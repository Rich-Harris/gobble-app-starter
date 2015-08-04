'use strict';

var moment = require('moment');
moment = 'default' in moment ? moment['default'] : moment;

var answer = 42;

function message() {
	console.log('generating message...');
	return 'the answer is ' + answer;
}

var $ = function $(selector) {
	return document.querySelector(selector);
};

var el = $('main');
setInterval(function () {
	return el.innerHTML = 'the time is ' + moment().format('h:mm:ss a');
}, 500);

console.log(message());
//# sourceMappingURL=/www/GOBBLE/gobble-app-starter/.gobble/03-babel/.cache/main.js.map
