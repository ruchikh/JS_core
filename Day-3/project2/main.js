/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */


	function numbtostr(n){
		var n = String(n);
        return n;
       
 }


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function strtonum(n){
		return 	n += 1;
	}	

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function subtonum(n){
		return 	n -= 1;
	}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
var sumtwonum = (x, y) => x + y;
sumtwonum(2, 3);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

var subtwonum = (x, y) => x - y;
subtwonum(5, 8);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

var multtwonum = (x, y) => x * y;
multtwonum(5, 8);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
var divtwonum = (x, y) => x / y;
divtwonum(40, 5);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 var square = (x) => x = x ** 2;
 square(2);


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

var 



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function complarger(a, b) {

  	if (a > b) {
  		return  ("true " + a + " is larger than " + b);
  	}
  	 else {
  	 	return "false";
  	}
 }


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function compsmaller(a, b) {

  	if (a < b) {
  		return  ("true " + a + " is smaller than " + b);
  	}
  	 else {

  	 	return "false";
  	}
  }
 

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

var eqwalnumber = (a, b) => a == b ? console.log(true): console.log(false);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
var smallestnum = (x, y) => Math.min(x, y);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
var largestnum = (x, y) => Math.max(x, y);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 var evennumb = (a) => a%2 == 0 ? console.log(true): console.log(false);


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

  var oddnumb = (a) => a%2 !== 0 ? console.log(true): console.log(false);


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


function lettergade(score, total){

	var percentage = score*100/ total;

	if(percentage >= 90 && percentage >= 100){
		console.log("A");
	}
	else if(percentage >= 80 && percentage >= 89){
		console.log("B");
	}

	else if(percentage >= 70 && percentage >= 79){
		console.log("C");
	}
	else if(percentage >= 60 && percentage >= 69){
		console.log("D");
	}
	else if(percentage >= 0 && percentage >= 59){
		console.log("E");
	}
	else {
		return "not a number";
	}

}
 

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

 var restaurant = {
      reviews: 0,
 }

function reviewcheck(restaurant) {
	if(restaurant.reviews){
		restaurant.reviews++;
	}else {
	 restaurant.reviews = 1;
	}
	return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

  var twostring = (word1, word2) => console.log(word1.concat(' ', word2));

//  function addtwostring(a, b, c) {
//   var s = Array.prototype.join.call(arguments);
//   console.log(s); // '1,a,true'
// }


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function calculateCircumference(radius){
	return 2 * Math.PI * radius;
}

function calculatearea(radius){
	return Math.PI * (radius ** 2);
}

