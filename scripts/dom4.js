/**
 * Basics of creating an event listener example #1
 */
// 1) get the element
var btn1 = document.querySelector('.btn-1'); // selects a single element with the class of "btn-1"

// 2) define a function to execute when the event is fired
function clickEvent(event) {
	console.log('event fired...');
}

function mouseoverEvent() {
	console.log('mouseover...');
}

function mouseoutEvent() {
	console.log('mouseout...');
}

// Review on calling functions:
// clickEvent(); // called the function

// 3) adding the event listener on to an element
// .addEventListener({STRING representation of the event you're listening for}, callback function)
// if you pass an already defined function as your callback make sure you omit the parenthesis b/c the event listener will call the function
btn1.addEventListener('click', clickEvent);
btn1.addEventListener('mouseover', mouseoverEvent);
btn1.addEventListener('mouseout', mouseoutEvent);

/**
 * Basics of creating an event listener example #2
 */
// 1) get the element
// var btn2 = document.getElementsByClassName('btn-2').item(0);
var btn2 = document.querySelector('.btn-2');

// 2) add the event listener to the element and provide an event and a callback function
btn2.addEventListener('click', function () {
	//! checking if our btn2 variable/element has a green background if it does then when reset it back to its original properties, and if it does have a background color of green we change to have a green background and white text
	// if (btn2.style.backgroundColor === 'green') {
	// 	btn2.style.backgroundColor = '';
	// 	btn2.style.color = '';
	// } else {
	// 	btn2.style.backgroundColor = 'green';
	// 	btn2.style.color = 'white';
	// }
	//
	//! this way we are toggling a class on and off, the style rules are all defined in a css file we have linked, this solution is more scalable
	btn2.classList.toggle('green-btn');
});

/**
 * Event Object
 */

var btn3 = document.querySelector('.btn-3');

// the callback function takes one parameter the event object, you can alias it as anything you like but the convention is to name it "e" I've used "event" here for clarity's sake
btn3.addEventListener('click', function (event) {
	console.log(event);
	console.log(event.target);
});

// get the submit button inside the form
var btn4 = document.querySelector('form button');
// var btn4 = document.querySelector('button[type=submit]'); //! also works

btn4.addEventListener('click', function (e) {
	e.preventDefault(); // prevents the submit button that normally when clicked would submit the form to the specified action attribute value
});

// You can immediately add an event listener onto an HTML element without storing it in a variable if you like, however in most instances it makes more sense to store in a variable
document.querySelector('a').addEventListener('click', function (e) {
	e.preventDefault(); // prevent the a tag from relocating our browser to a new page
});

// // prettier-ignore
// btn4.addEventListener('mouseover', (e) => {
// 	// ES6 arrow functions || lambda functions
// });

/**
 * USEFUL EVENTS I USE OFTEN
 */

var btn5 = document.querySelector('.btn-5');

// btn5.addEventListener('click', function () {
// 	console.log('clicked');
// });

// btn5.addEventListener('dblclick', function () {
// 	console.log('double clicked');
// });

// btn5.addEventListener('mousedown', function () {
// 	console.log('mousedown');
// });

// btn5.addEventListener('mouseup', function () {
// 	console.log('mouseup');
// });

// btn5.addEventListener('mouseleave', function () {
// 	console.log('mouseleave');
// });

// btn5.addEventListener('mouseenter', function () {
// 	console.log('mouseenter');
// });

// btn5.addEventListener('mouseover', function () {
// 	console.log('mouseover');
// });

// btn5.addEventListener('mouseout', function () {
// 	console.log('mouseout');
// });

// btn5.addEventListener('mousemove', function () {
// 	console.log('mousemove');
// });

/**
 * color changing div
 */
const box = document.querySelector('.box');

box.addEventListener('mousemove', function (e) {
	//! We used this to learn what our ranges on the x and y property of the event object to determine if they are suitable to use for our project
	// if (e.y > 255) {
	// 	console.log(e.y);
	// } else if (e.x > 255) {
	// 	console.log(e.x);
	// }
	var red = e.x - 1;
	var green = e.y - 1;
	var blue = Math.floor(Math.random() * 255 + 1); // 0 - 255
	box.style.backgroundColor = 'rgb(' + red + ',' + blue + ',' + green + ')'; // rgb(255, 255, 255)
});
