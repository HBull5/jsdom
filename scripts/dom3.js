// variable declarations
var app = document.querySelector('.app'); // ELEMENT NODE, HTML ELEMENT, HTML ENTITY

// create a paragraph
var para1 = document.createElement('p'); // do NOT put in these things < >
var heading1 = document.createElement('h1'); // do NOT put in these things < >
var img1 = document.createElement('img'); // do NOT put in these things < >

// give paragraph a class (unconventional method)
para1.className = 'my-class-1 my-class-2';
para1.className += ' my-class-3'; // don't forget the space!

heading1.className = 'heading';
heading1.className += ' special';
heading1.id = 'special-id';

// give paragraph an id
para1.id = 'my-id';

// setAttribute
// well put this on the screen in a bit
img1.setAttribute('src', 'https://source.unsplash.com/random');
img1.setAttribute('alt', 'image of a desk');
img1.setAttribute('height', '500px');

// overwrite id attribute of para1
para1.setAttribute('id', 'something-new');
para1.setAttribute('class', 'new-class-1 new-class-2');

// getAttribute
console.log(heading1.getAttribute('id')); // special-id
console.log(heading1.getAttribute('class')); // heading special

para1.setAttribute('class', para1.getAttribute('class') + ' new-class-3'); // new-class-1 new-class-2 new-class-3

// removeAttribute
heading1.removeAttribute('id');

// check if hasAttribute probably going to use some conditionals here
// returns a boolean
console.log(heading1.hasAttribute('id')); // false
console.log(para1.hasAttribute('id')); // true

// if heading1 does NOT have the id attribute
if (!heading1.hasAttribute('id')) {
	heading1.setAttribute('id', 'id-2');
}

console.log(para1);
console.log(heading1);
console.log(img1);

// OUTPUT TO HTML DOCUMENT
app.appendChild(img1); // pretty neat-o
// output our paragraph to the page
para1.textContent = 'Hello world!'; // ? confusing af? this should break
app.appendChild(para1); // even though you can get the order wrong and it'll still work I think its best to create your element entirely before appending
heading1.textContent = 'Generic Heading';
app.appendChild(heading1);

// we want to create an ul with 3 li's
var ul = document.createElement('ul');
ul.setAttribute('class', 'navbar');

// uninformed
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');

// li1.textContent = 'A';
// li2.textContent = 'B';
// li3.textContent = 'C';

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// app.appendChild(ul);

// informed
// for (var i = 1; i <= 100; i++) {
// 	var li = document.createElement('li');
// 	li.textContent = i;
// 	ul.appendChild(li);
// }

// app.appendChild(ul);

// creating a text node
var para2 = document.createElement('p');
var text2 = document.createTextNode('lorem ipsum dolor');
var text3 = document.createTextNode('hello from the other side');
para2.appendChild(text2);
// console.log(para2);

// replace text2 with text3 inside of para2
para2.replaceChild(text3, text2); //? more weirdness
// console.log(para2);

// remove text3 from para2
para2.removeChild(text3);
// console.log(para2);

// classList
var para3 = document.createElement('p');

// add
para3.classList.add('my-class');
console.log(para3);

// remove
para3.classList.remove('my-class');

// toggle
para3.classList.toggle('my-class'); // add the my-class class to para3
para3.classList.toggle('my-class'); // remove the my-class class to para3

// DOM my way

// querySelectorAll -> node list which we cannot get textContent, innerHTML, etc from b/c it's a node list it has different properties methods associated with it. items of the node list some can get textContent, innerHTML, etc some cant for example ELEMENT NODES can, however comment nodes & text nodes may or may not depending on the property trying to be accessed
// getElementsByClassName -> html collection which we cannot get textContent, innerHTML, etc. The individual items of the collection are ELEMENT NODES that you can get the textContent, innerHTML, etc. from.

// text content
var str = '<p>hello world</p>'; // this is still a string it is NOT a html element/ node / entity therefore you cannot get the textContent, innerHTML, etc. from this variable
para3.textContent = 'this is the third paragraph';

// inner HTML
var select = document.createElement('select');

// select.textContent = '<option>A</option> <option>B</option> <option>C</option>';
select.innerHTML = `
    <option class="my-class">A</option>
    <option class="my-class">B</option>
    <option class="my-class">C</option>
`;
console.log(select);
app.appendChild(select);

var div = document.createElement('div');
div.innerHTML = `
    <div> 
        <h1>Heading</h1>
        <p>Some <span>text</span></p>
    </div>
`;
console.log(div);

// output a ul with 5 li's each as a number

// remove all other content from our app div
app.innerHTML = '';

// define a output
var output = '';
for (var i = 1; i <= 5; i++) {
	output += `<li>` + i + `</li>`;
}
output = `<ul id="list-o-things">` + output + `</ul>`;
app.innerHTML = output;

// outer HTML
console.clear();
var ourUl = document.querySelector('#list-o-things');
console.log(ourUl.outerHTML); // the surrounding tags
console.log(ourUl.innerHTML); // w/out surrounding tags
// ourUl.outerHTML = '<p>some text in it</p>';
ourUl.innerHTML = '<p>some text in it</p>'; // <ul> <p>...</p> </ul>

// add in an HTML input to our document
// var input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('required', '');
// input.setAttribute('placeholder', 'type in your username');
// app.appendChild(input);

// value
app.innerHTML = '<input type="text" /><button>GO</button>';
// value
var input = document.querySelector('input');
console.log(input.value); // the value property is whatever the value attribute is equal at the point of the time this code is executed

input.value = 'user123';
console.log(input.value);

// style
input.style.border = '1px solid red';
input.style.backgroundColor = 'blue';
input.style.color = '#fff';

app.style.display = 'flex';
app.style.flexDirection = 'flex-column';
app.style.justifyContent = 'center';
app.style.alignItems = 'center';
app.style.height = '100vh';
app.style.width = '100%';
document.all;
