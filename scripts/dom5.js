var submitBtn = document.querySelector('button[type=submit]');
var usernameInput = document.getElementById('username');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

/**
 * form submission requirements i.e. validation
 * username: maximum of 10 characters
 * email: has to include the "@"
 * password: has to be longer than 6 characters
 */

submitBtn.addEventListener('click', function (e) {
	e.preventDefault();
	// console.log(usernameInput.value);
	// console.log(emailInput.value);
	// console.log(passwordInput.value);
	var validInputs = [];
	var invalidInputs = [];

	// check if usernameInput.value is less than or equal to 10
	if (usernameInput.value.trim().length <= 10 && usernameInput.value.trim().length !== 0) {
		validInputs.push(usernameInput);
	} else {
		invalidInputs.push(usernameInput);
	}

	// email includes the "@" symbol
	if (emailInput.value.includes('@')) {
		validInputs.push(emailInput);
	} else {
		invalidInputs.push(emailInput);
	}

	// password is greater than 6 characters
	// pretend password input -> password
	// "password" > 6
	if (passwordInput.value.trim().length > 6 && passwordInput.value.trim().length !== 0) {
		validInputs.push(passwordInput);
	} else {
		invalidInputs.push(passwordInput);
	}

	/**
	 * check our validInputs array & our invalidInputs array and manipulate the DOM to inform the user of what is valid and what is invalid
	 */

	// check if invalidInputs is empty
	if (invalidInputs.length > 0) {
		// not submit the form

		// loop through each element of the invalidInputs array
		for (var i = 0; i < invalidInputs.length; i++) {
			invalidInputs[i].value = '';
			invalidInputs[i].classList.add('invalid');
		}

		// loop through each element of the validInputs array
		// we want to remove the class of invalid
		for (var i = 0; i < validInputs.length; i++) {
			validInputs[i].classList.remove('invalid');
			validInputs[i].classList.add('valid');
		}
	} else {
		// you would actually submit the form instead of relocating to google, just doing this as a simulation of form being submitted
		window.location = 'http://www.google.com';
	}
});
