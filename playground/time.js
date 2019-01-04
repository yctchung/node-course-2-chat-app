var moment = require('moment');

// Jan 1st 1970 00:00:00 am
// 1000 = 1 sec after, ie, Jan 1st 1970 00:00:01 am
// -1000 = 1 sec before, ie, Dec 31st 1969 11:59:59 pm

/*
var date = new Date();
console.log(date.getMonth());
*/

var date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

var time = moment();
console.log(time.format('h:mm a'));
console.log(time.format('LT'));

var createdAt = 1234;
var testDate = moment (createdAt);
console.log(testDate.format('h:mm a'));

var someTimestamp1 = new Date().getTime();
console.log(someTimestamp1);

var someTimestamp2 = moment().valueOf();
console.log(someTimestamp2);