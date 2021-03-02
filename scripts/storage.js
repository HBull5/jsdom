// local storage is permanent, until deleted

// session storage persists until the browser is closed

// setting local and session storage

// sets a localStorage var
localStorage.setItem('rememberMe', true);

// sets a sessionStorage var
sessionStorage.setItem('session var', 'hooray');

localStorage.removeItem('rememberMe'); // delete the rememeberMe var from local storage

localStorage.setItem('key', 'value');

// returns the value for the specified key parameter
console.log(localStorage.getItem('key'));

localStorage.setItem('property', 'value');

// clear out all local/session storage
localStorage.clear();

// any method that works for localStorage also works for sessionStorage and vice versa
sessionStorage.clear();
