var obj1 = {
	key: 'value',
	key2: 5,
	key3: true,
	key4: [1, 2, 3],
	key5: { property: 'value' }
};

var jsonStr = JSON.stringify(obj1); // this will take obj1 and format as a JSON string so we can send it around to other places

console.log(obj1);
console.log(typeof obj1); // obj

console.log();

console.log(jsonStr);
console.log(typeof jsonStr); // string

console.log(JSON.parse(jsonStr)); // should return a copy of obj1
console.log(typeof JSON.parse(jsonStr)); // object
