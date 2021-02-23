// BASIC DEBUGGER EXAMPLE
// console.log('stop here');
debugger;
var randoVar = 'random';

if (true) {
	console.log('taco world');
}

// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }

// THE TRIDE & TRUE CONSOLE.LOG() METHOD
// var x = 1;
// var y = 5;

// x++;
// if (true) {
// 	x++;
// }

// console.log(x + y); // 9???
// var arr = ['a', 'b', 'c', 'd'];
// arr.splice(1, 2);
// console.log(arr); // [a, d]

// DEBUGGER, BREAKPOINTS, WATCH VARIABLES
// var x = 0;
// // debugger;

// function increment() {
// 	x++;
// }

// function decrement() {
// 	x--;
// }

// function customIncrement(i) {
// 	var y = 0;
// 	x += i;
// }

// function customDecrement(i) {
// 	x -= i;
// }

// increment();
// customIncrement(4);
// decrement();
// decrement();
// customDecrement(2);

// DEBUGGER CALLSTACK
var x = 0;

function increment() {
	x++;
}

function decrement() {
	x--;
}

function customIncrement(i) {
	x += i;
	decrement();
}

function customDecrement(i) {
	x -= i;
}

increment();
decrement();
customIncrement(4);
