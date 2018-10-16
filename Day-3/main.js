// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


function tellFortune(job, location, partner, children){
	console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children}`);
}

tellFortune("developer","US","Elly", 2);


// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the functio

function puppyage(age, conversion){
	var a = age/7;
	console.log(`your doggie is ${a} year old in dog years!`);
}
puppyage(18);


// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

  
 function calculateSupply(age, amount){
 	const maxAge = 100;
 	var total = (amount * 365) * (maxAge - age);
 	console.log(`you will ${total} to last you until the ripe old age of ${maxAge}`);
 }
 calculateSupply(30, 25);

 // Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


function celsiusToFahrenheit(celsius){
	var celsiuscal = celsius*9/5 +32;
	console.log(celsius + '°C is ' + celsiuscal + '°F');
}
celsiusToFahrenheit(43);

function fahrenheitToCelsius(temp){
	var fahrenheittemp = ((fahrenheit-32)*5)/9;
	console.log(temp + '°C is ' + fahrenheittemp + '°F');

}
celsiusToFahrenheit(25);


//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
checkAge(25);

// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?
//no

// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

/*function checkAge(age){
	((age > 18) ? console.log(true) : confirm('Do you have your parents permission to access this page?'));
}
checkAge(25);*/




// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

/*var x = prompt("ENter any value");
var n = prompt("ENter any value");*/

function pow(x,n){
	return x = x**n;
 if(n < 1){
 	alert("return natural number");
 }else {
 	alert(x, n);
 }
}
pow(2, 3);


// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
 var string = prompt("enter a string");

 function checkvowel(str){
 	 var vowelsCount = 0;

 	// for (var c = 0; c <= string.length - 1; c++)
 	for(c in string)
 	{
 		if(string[c] == "a" || string[c] == "e" || string[c] == "i" || string[c] == "o" || string[c] == "u" || string[c] == "A"|| string[c] == "E" || string[c] == "I" || string[c] == "O" || string[c] == "U"){
 			vowelsCount++;		 			
 	}
 	 
}
 	console.log(vowelsCount);
}


// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

var string = prompt("enter any palindrome");

function checkpallindrom(){

}




// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.



// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10
for (var a = 1; a < 10; a++){
console.log(a+ "");
if(a == 5){
 
  }
  else {
  	
  }

}
// console.log("<br />You have exited the loop.");




// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

var a = prompt("enter a number for product");
var sum = 0, mult = 1;
function possibility(num3){
	if(num3 == 1){
		return sum += num3;
	}
	else if (num3 == 2)
	{
		return mult *= num3;
	} else {
		console.log("not define");
	}

	console.log(num3);
}


// Write a function that returns the largest element in a list.

var arr = [1, 5, 4, 46, 42, 5, 99, 52];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);


// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

var numb = prompt("enter a number to print");

function sumnumber(numb){
	var sum = 0;
	for(var i = 1; i < numb; i++){
        sum +=  i;
	}
	console.log(sum);

}

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

var numb1 = prompt("enter a number to sum");

function sumnumber1(numb1){
	var sum = 0;
	for(var i=1; i <= numb1; i++){
	if((i%5 == 0) || (i%7 == 0)) {
        sum +=  i;
	}	
}
console.log(sum);
}
// Write a program that takes a number under (25) and prints the multiplication table for the number.

var x = prompt("enter a number to mult");
var sum = 0;
function multnumber(mult){
	
	for(var i=1; i <= 10; i++){
	if(i < 25){
        sum += x*i + '\n';
		}
		else {
			console.log("number is greater than 25");
		}	
		
}
 console.log(sum);  
}