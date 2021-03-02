var ages = [27, 25, 33, 45, 55, 30, 62, 71, 44, 38];
var names = ['susan', 'steve', 'elizabeth', 'steve', 'tom', 'anderson'];
var dates = [1944, 1996, 1810, 1322, 2020, 2222];
var firstNames = ['susan', 'steve', 'elizabeth', 'steve', 'tom', 'anderson'];
var lastNames = ['deer', 'doe', 'deer', 'doe', 'deer', 'doe', 'deer', 'doe', 'deer', 'doe'];

// sort: is a method used to sort arrays, it sorts the arrays based on return values: -1 or 1 WHAT THEY DO: -1 will flip them
// parameters: callback function, the callback takes two parameters representing the two elements currently being sorted
var sortedAges = ages.sort(function (a, b) {
	if (a > b) {
		return -1;
	}
});
console.log(sortedAges);

// SORT ASC SHORTHAND
var asc = ages.sort((a, b) => a - b);
console.log(asc);

// SORT DESC SHORTHAND
var desc = ages.sort((a, b) => b - a);
console.log(desc);

// find: is a method used to find elements by some criteria defined by the developer
// parameters: callback function, callback takes one parameter representing each element from the array
var twentyFive = ages.find(function (age) {
	if (age === 25) {
		return age;
	}
});
console.log(twentyFive);

var eNames = names.find(function (name) {
	if (name.includes('e')) {
		return name;
	}
});
console.log(eNames);

// Primary use case: React
// map: is used to create new arrays from old arrays,
// parameters: callback function, takes one parameter which is each element from the array
var doubleAge = ages.map(function (age) {
	return age * 2;
});
console.log(ages);
console.log(doubleAge);

var quadrupleAge = ages
	.map(function (age) {
		return age * 2;
	})
	.map(function (age) {
		return age * 2;
	});
console.log(quadrupleAge);

var matchingLastNames = firstNames.map(function (name, index) {
	return lastNames[index];
});

console.log(firstNames);
console.log(matchingLastNames);

var fullName = firstNames.map(function (name, index) {
	return name + ' ' + lastNames[index];
});
console.log(fullName);

// reduce: used to reduce values to a single value
// parameters: callback function, starting value MDN calls this the accumulator
var totalYears = ages.reduce(function (total, age) {
	return total + age;
}, 0);
console.log(totalYears);

// var total = 0;
// for (var i = 0; i < ages.length; i++) {
// 	total += ages[i];
// }
// for (const age of ages) {
// 	total += age;
// }
// console.log(total);

// filter: used to filter an array by a conditional
var over30 = ages
	.filter(function (age) {
		if (age >= 30) {
			return age;
		}
	})
	.sort(function (a, b) {
		if (b > a) {
			return -1;
		}
	});

console.log(over30);
