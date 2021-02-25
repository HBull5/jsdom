// other notable methods, match, exec

// test is a regular expression method
// test: returns a boolean if the provided string matches the regular expression
// params: string
var regex = /abc/; // this regular expression is checking that abc is included in the string

console.log(regex.test('abc')); // true
console.log(/123/.test('123 abc')); // still returns true b/c it includes 123 in the string
console.log(/123/.test('abc')); // false

// search is a string method
// params: a regex or a variable that houses a regex
// searches for the index of the first occurrence that matches the regular expression
// return: returns starting index of first occurrence of a match to the regex, returns -1 if not matches are found
var str1 = 'abc123';

console.log(str1.search(/abc/)); // 0
console.log(str1.search(regex)); // 0
console.log(str1.search(/123/)); // 3
console.log(str1.search(/xyz/)); // -1

// replace is a string method
// params: pattern to match or a string to match, the value of which replace it with (this must be a string)
// return: the new string with the characters replaced/removed

console.log(str1.replace('abc', '')); // remove 'abc' from 'abc123'
console.log(str1.replace(/abc/, '')); // this will do the same thing
console.log(str1.replace(/abc/, 'xyz')); // xyz123

/**
 * regex for phone numbers
 */
// /^(\+1)?\s?\(?[0-9]{3}\)?\s?-?[0-9]{3}-[0-9]{4}$/
// (800) 867-5309
// +1 800-867-5309
// +1800-867-5309
// +1(800) 867-5309

var jsonStr = '{ "key" : "value" }';

console.log(JSON.parse(jsonStr).key);
