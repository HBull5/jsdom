const app = document.querySelector('#app');
const nav = `<nav><button onClick="loadHome()">Home</button><br><button onClick="loadAbout()">About</button></nav>`;
const homepage = `<h1>Home Page</h1><p>lorem ipsum text and stuff and things with the whatnots ahd the whos</p>`;
const about = `<h1>About Page</h1><p>lorem ispum text and stuf and things with the whatnots ahd the whos</p>`;

// function that sets page to homepage
function loadHome() {
	app.innerHTML = nav + homepage;
}

// fucntion that sets page to about page
function loadAbout() {
	app.innerHTML = nav + about;
}

// set root domain to homepage
loadHome();
