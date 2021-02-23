// var myDom = {
// 	document: 'html',
// 	code: 'things'
// };

// var code = 'document';

// console.log(myDom.code); // dot syntax
// console.log(myDom['code']); // look a lot like array syntax

// console.log(window);

// var LOOKATME1 = '123';
// let LOOKATME2 = 'abc';

// console.log(document.all); // dont need use this regularly
// console.log(document.head); // returns the head portion the html
// console.log(document.body); // returns the body portion of the html
// document.body = document.createElement('body');

// METHOD REVIEW
// var obj = {
// 	property: 'hello',
// 	myMethod() {
// 		console.log('hello');
// 	},
// 	myMethod2(str) {
// 		console.log(str);
// 	}
// };

// obj.property;
// obj.myMethod();
// obj.myMethod2('goodbye');

// HTML Collections
// var heading = document.getElementById('heading'); // pass in a parameter as a string the represents the value of the id
// console.log(heading);
// var texts = document.getElementsByClassName('text'); // HTML collection
// console.log(texts);
// console.log(texts[0]);

// Node Lists
// var heading = document.querySelector('#heading'); // HTML element
// console.log(heading);
// var texts = document.querySelectorAll('.text'); // Node List
// console.log(texts);
// var lastParagraph = document.querySelector('div p:last-child'); // you can use any css selector valid in css
// console.log(lastParagraph);
// var h1 = document.querySelectorAll('.text').item(1).children;
// console.log(h1);

// children
// var div = document.querySelector('#heading');
// console.log(div);
// var divChildren = div.children; // HTML Collection(4) [h1.text, p.text, p, nav]
// console.log(divChildren);

// child nodes
// var div = document.getElementById('heading');
// console.log(div);
// var divChildNodes = div.childNodes; // node list
// console.log(divChildNodes);
// NodeList(6) [commentNode, textNode, commentNode, h1.text, p.text, p nav] didn't add in textNodes for enter strokes

// walking the DOM
// var b = document.getElementById('special');
// var b = document.querySelector('#special');
// var b = document.querySelector('#heading').children[3].children[0].children[1].children[0];
// console.log(b);

// var b = document.querySelector('#bob');
// console.log(b);

// Making HTML collections or Node lists into arrays so we can use array methods
var z = document.querySelector('#heading').children;
console.log(z);

// we could turn our HTML collection/node list change it into an array
z = Array.from(z);
console.log(z);
z.pop();
console.log(z);
z.push('banana');
console.log(z);
var paragraph = document.createElement('p');
var paraTxt1 = document.createTextNode('hello ');
var paraTxt2 = document.createTextNode(' world!');
var span = document.createElement('span');
var spanTxt = document.createTextNode('this is span text');
paragraph.append(paraTxt1);
span.appendChild(spanTxt);
paragraph.append(span);
paragraph.append(paraTxt2);
paragraph.classList.add('myClass');

z.push(paragraph);
console.log(z);
// now that its an array we can use array methods like pop to remove the last element

/**
 * HTML COLLECTION METHODS:
 * namedItem
 * item
 */

/**
 * NODE LIST METHODS:
 * item
 * entries
 * forEach
 * keys
 * values
 */

/**
 * ARRAY METHODS:
 * ITS A LOT NOT PUTTING IT HERE READ -> https://www.w3schools.com/jsref/jsref_obj_array.asp
 */
