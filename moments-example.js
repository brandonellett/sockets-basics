var moment = require('moment');
var now = moment();

//console.log(now.format());
//now.subtract(1, 'year');
//console.log(now.format('MMM Do YYYY, h:mma')); // 6:45 pm
//console.log(now.format());

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format('MMM Do YYYY, h:mma'));