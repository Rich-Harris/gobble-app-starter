'use strict';

var moment = require('moment');
moment = 'default' in moment ? moment['default'] : moment;

const answer = 42;

function message () {
	console.log( 'generating message...' );
	return `the answer is ${answer}`;
}

const $ = selector => document.querySelector( selector );

const el = $( 'main' );
setInterval( () => el.innerHTML = `the time is ${moment().format('h:mm:ss a')}`, 500 );

console.log( message() );
//# sourceMappingURL=main.js.map