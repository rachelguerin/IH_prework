// function objectToArray(myObject) {
//     var returnArray=[];
//     for (key in myObject) {
//         returnArray.push(myObject[key]);
//     }
//     return returnArray
// }
// var country;

// country = {
//     name: "Uruguay",
//     continent: "South America",
//     capital: "Montevideo"
// };
// console.log(objectToArray(country))

function factorial(number) {
	if (number === 0) {return 1;}
	return number * factorial(number-1);

}

// console.log(factorial(2));
// console.log(factorial(5));
// console.log(factorial.length);

function root(value,radix){
	if (typeof radix === 'undefined') {radix = 2;};
	return Math.pow(value, 1/radix);
}

// console.log(root(4));
// console.log(root(125,3));

var aString = 'this is a global';

function aFunction() {
  console.log('I can use aString because it is a global: ' + aString);
}

function anotherFunction() {
  var aString = 'this is a local';
  var aLocal = 'this is a local too';
  console.log('The local variable aString hides the global: ' + aString);
  console.log('The local variable aLocal is only available here: ' + aLocal);
}

// aFunction();
// anotherFunction();

// console.log('The global is not affected by the body of anotherFunction()');
// console.log('aString: ' + aString);

// console.log('The local variable aLocal from anotherFunction() is not visible:');
// console.log('aLocal is ' + aLocal);

function makeRoot(radix){
	'use strict';

	function root(value){
		return Math.pow(value, 1 / radix);
	}

	return root;
}

// var sqrt = makeRoot(2);
// var cubrt = makeRoot(3);
// var fourthrt = makeRoot(4);

// console.log(sqrt(16));
// console.log(cubrt(27));
// console.log(fourthrt(256));

function avg(anyArray){
	'use strict';

	if (!Array.isArray(anyArray)) {
		anyArray = arguments;
	}

	var sum = 0;
	for (var index = 0, length = anyArray.length; index < length; index++) {
		sum += anyArray[index];
	}
	return sum / length;
}

// console.log(avg([1,2,3]));
// console.log(avg(1,2,3));

var computer = {
	name: 'Deep Thought',
	getTheAnswerToLife: function () {
		return console.log(this.name + ': 42');
	},
	testThis: function () {
		console.log(this === computer);
	}
};

computer.name;
computer.getTheAnswerToLife;
computer.getTheAnswerToLife();
computer.testThis();
