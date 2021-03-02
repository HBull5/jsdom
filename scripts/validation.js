var username = document.querySelector('#username');
var password = document.querySelector('#password');
var number = document.querySelector('input[type=number]');
var email = document.querySelector('input[type=email]');

// var submit = document.querySelector('input[type=submit]');

// submit.addEventListener('click', function (e) {
// 	// our validation would happen here
// 	if (username.value === '') {
// 		alert('input is empty!');
// 		e.preventDefault();
// 	}
// });

// var form = document.querySelector('form');
// form.addEventListener('invalid', function () {
// 	alert('invalid event');
// });

// username.addEventListener('invalid', function () {
// 	alert('invalid event');
// });

username.addEventListener('focus', () => {
	username.classList.add('validation');
});

password.addEventListener('focus', () => {
	password.classList.add('validation');
});

number.addEventListener('focus', () => {
	number.classList.add('validation');
});

email.addEventListener('focus', () => {
	email.classList.add('validation');
});
