// setTimeout: waits a specified amount of time to call a callback function, does not pause execution
// parameters: callback function & an amount of time to wait
// setTimeout(function () {
// 	alert('happens after 3 seconds....');
// }, 3000);

// console.time();
// for (var i = 1; i <= 3; i++) {
// 	console.time();
// 	setTimeout(function () {
// 		console.log('1 second...');
// 	}, 1000);
// 	console.timeEnd();
// }
// console.timeEnd();

// setInterval:
// var ourInterval = setInterval(function () {
// 	console.log('set interval');
// }, 1000);

// clearTimeout
// var ourTimeout = setTimeout(function () {
// 	console.log('setTimeout');
// }, 2000);

// clearTimeout(ourTimeout);

// clearInterval
// var i = 1;
// setInterval(function () {
// 	if (i > 5) {
// 		clearInterval();
// 	} else {
// 		console.log('set interval');
// 		i++;
// 	}
// }, 1000);

// var interval1 = setInterval(function () {
// 	console.log('interval1');
// }, 1000);

// var interval2 = setInterval(function () {
// 	console.log('interval2');
// }, 2000);

// clearTimeout(interval2);
