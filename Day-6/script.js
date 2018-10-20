
// Write a JavaScript function to check whether an `input` is a string or not.
function checkstring(x){
	if(typeof x == 'string'){
		return (x);
	}else
	{
		return 0;
	}	
}

// Write a JavaScript function to check whether a string is blank or not.

function nullstring(x){
  if(typeof x == ' '){
  	return ("string is null");
  }else {
  	return (x);
  }
}

// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']

const paragrph = 'Hello World In Javascript';
const splitparagraph = paragrph.split(' ');
console.log(splitparagraph);




// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"

function characters(string, number){
	 return string.slice(0, number);

}
characters("Hello world", 4);




// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)

function convertname(string){
	index = 6;
	 return (string.slice(0, 5)+ " " + string.charAt(index) + ".");
	
}
convertname("Rahul Dravid");


// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"








// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower'

function parameterize(string){
      var regex = / /g;
      console.log(string.replace(regex, '-').toLowerCase());

}
parameterize('The Perks Of Being A Wallflower');


// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'

function capfirstletter(string){
	var arraysplit = string.split(' ');

	for(var i=0; i < arraysplit.length; i++){
		arraysplit[i] = arraysplit[i].charAt(0).toUpperCase() + arraysplit[i].substring(1);
	}
	return arraysplit.join(' ');
}
capfirstletter("hello batman from India");


// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'

/*function lowertoupper(string){
	return (string.toLowerCase().toUpperCase());
}
lowertoupper('AaBbcVv');
*/

function uptolow(string){
	var splited = string.split('');

	for(var i = 0; i < splited.length; i++){
		// let value = splited[i];
		if(splited[i] == splited[i].toUpperCase()){
		splited[i] = splited[i].toLowerCase();
	} else {
		splited[i] = splited[i].toUpperCase();
	}
	}	
	return splited.join('');
}

// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'

function camelcase(string){
	var arraysplit = string.split(' ');

	for(var i=0; i < arraysplit.length; i++){
		arraysplit[i] = arraysplit[i].charAt(0).toUpperCase() + arraysplit[i].substring(1);
	}
	return arraysplit.join('');
}
camelcase("Learning about js");


// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'

function uncamelcase(string){

 return string.replace(/([A-Z]+)/g, " $1");
}

uncamelcase("LearningAboutJs");



// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'

/*function repeatsent(string, number){
	return string.repeat(4);
}
repeatsent('Hello!', 4)*/

function repeatsent(i){
	for(var i=0; i<=4; i++){
		console.log("Hello!");
	}
}


// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd



function humanized(number){
    
}

