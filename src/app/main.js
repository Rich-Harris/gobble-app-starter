import moment from 'moment';
import { message } from './message';

const $ = selector => document.querySelector( selector );

const el = $( 'main' );
setInterval( () => el.innerHTML = `the time is ${moment().format('h:mm:ss a')}`, 500 );

console.log( message() );
