var submitBtn = document.querySelector('#submitBtn');
// alternate methods of getting the submit input button
// var submitBtn = document.getElementById('submitBtn');
// var submitBtn = document.querySelector('input[type=submit]')
var form = document.querySelector('form');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var body = document.querySelector('body');

// event object
// submitBtn.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	console.log('event fired...');
// });

// listening for the submit event and doing some validation, pending that validation is good we will the use JS to submit form utilizing the submit() method. This must be called on the form element you wish to submit
form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (
		username.value.length !== 0 &&
		username.value.length <= 10 &&
		password.value.length <= 10 &&
		password.value.length !== 0
	) {
		// submit the form
		form.submit();
	} else {
		alert('incorrect values passed!');
	}
});

// keydown: depressing of the key
body.addEventListener('keydown', function (e) {
	// console.log(e.key); // the key property of the event object will hold the value of the key pressed during the keydown event, you can use this to create key commands for your website or game
});

// keyup: release of the key, you can e.key here

// keypress: depressing and releasing of the key sequentially, you can e.key here

// focus: selecting inside element, primarily inputs, you can easily see by noticing the outline around the input once you have selected it NOTE: this outline can be turned off with CSS so it may potentially be there but typically is left in.
username.addEventListener('focus', function () {
	console.log('in focus');
});

// blur: when the element that had focus loses focus
username.addEventListener('blur', function () {
	console.log('blur...');
});

// copy: is listening for the any copy event, works for both mouse and keyboard commands, basically anytime something is copied to the clipboard. Same applies to cut & paste
password.addEventListener('copy', function () {
	console.log('something was copied....');
});

// cut: is listening for any cut event

// paste: is listening for any paste event

// input: any input at all into our input device.
password.addEventListener('input', function () {
	// console.log('something was done...');
});

// change: looks for any change between before and after on blur in you input device
password.addEventListener('change', function () {
	console.log('input was changed... ');
});

// variables for bubbling & delegation NOTE: needed for both examples
var outerBox = document.querySelector('.box');
var innerBox = document.querySelector('.innerBox');
var centerBox = document.querySelector('.centerBox');

/**
 * Event Bubbling
 * NOTE: run either delegation or bubbling separately, i.e. either comment bubbling or comment out delegation
 */

// body.addEventListener('click', function (e) {
// 	console.log('body');
// });

// outerBox.addEventListener('click', function (e) {
// 	console.log('outerbox');
// });

// innerBox.addEventListener('click', function (e) {
// 	console.log('innerBox');
// 	e.stopPropagation(); // this pops the bubble, e.g. it stops the bubbling of events at this point
// });

// centerBox.addEventListener('click', function (e) {
// 	console.log('centerBox');
// 	e.stopPropagation();
// });

/**
 * Event Delegation
 * the reverse of bubbling
 */

outerBox.addEventListener('click', function (e) {
	// console.log(e.target);

	if (e.target === outerBox) {
		outerBox.style.background = '#333';
		innerBox.style.background = '#fff';
		centerBox.style.background = '#fff';
	} else if (e.target === innerBox) {
		outerBox.style.background = '#fff';
		innerBox.style.background = '#333';
		centerBox.style.background = '#fff';
	} else {
		outerBox.style.background = '#fff';
		innerBox.style.background = '#fff';
		centerBox.style.background = '#333';
	}
});
