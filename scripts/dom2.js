var ul = document.querySelector('ul');
var heading = document.querySelector('#heading');
console.log(ul.firstChild); // the first node, wether a html node, a text node, or a comment node
console.log(ul.firstElementChild); // the first element node, so it'll skipt text and comment nodes
console.log(ul.lastChild); // text node
console.log(ul.lastElementChild); // li specifically li C
console.log(ul.childElementCount); // return 3
console.log(ul.parentNode); // this could return a text or commment node but mostly likely will not
console.log(ul.parentElement); // this going to only return element node that is the parent
console.log(heading.parentElement); // body
console.log(document.querySelector('html').parentElement); // null
// get parents of parents
console.log(ul.parentElement.parentElement); // div#heading
console.log(ul.nextSibling); // #text
console.log(ul.nextElementSibling); // ul#list-two
// get two siblings down
console.log(ul.nextElementSibling.nextElementSibling); // ul#list-three
// get ul#list-three
console.log(document.getElementById('list-three'));
console.log(document.querySelector('#list-three'));
console.log(document.querySelector('nav').lastElementChild);
// previous sibling
console.log(ul.previousSibling); // #text
console.log(document.querySelector('#list-two').previousSibling); // #text
console.log(document.querySelector('#list-two').previousElementSibling); // ul
// get previous sibling of siblings
console.log(document.querySelector('#list-three').previousElementSibling.previousElementSibling); // ul

// TEXT COMMENT ELEMENTS: firstChild, lastChild, parentNode, nextSibling, previousSibling

// ELEMENT: firstElementChild, lastElementChild, parentElement, nextElementSibling, previousElementSibling
