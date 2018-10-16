//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
var myPenguin = {
	character: "Penguin Puck",
	origin: "Love Birds",
	author: "Robert J. Sherman",
	canFly: false,


//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"

	chirp: function() {
		console.log("CHIRP CHIRP! Is this what penguins sound like?");
	},

	//5. Add another method to your penguin called sayHello that prints to the console the same message from problem 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!

	sayHello(){
		console.log("Hello, I'm a penguin and my name is" + " " + this.character);
	},

//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

//9. Call your penguin's fly() method and make sure it works!

	fly(){
		if (this.canFly==false){
			console.log("No flying for me!");
		}
		else {
			console.log("I can fly!");
		}
	},
}

//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"

console.log("Hello, I'm a penguin and my name is" + myPenguin.character);


//. Write another line of code that adds a new property to your penguin called canFly and set it to false.
 myPenguin.canFly = false;


// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

myPenguin.favoriteFoods = ["beats", "bread", "rice"]
/*console.log(myPenguin);
myPenguin.canFly = true;*/

// 2. Access your penguin's second favorite food and print it to the console using console.log()

console.log(myPenguin.favoriteFoods[1]);


// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

var firstFavFood = myPenguin.favoriteFoods[0];
console.log(firstFavFood);

// 4. Add another food to the end of the list.

// myPenguin.favoriteFoods.push("icecream");

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()

myPenguin.favoriteFoods.length;

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

myPenguin.favoriteFoods.length.push("pineapples");

 var lastFavFood = myPenguin.favoriteFoods.length-1;

 for(var i=0; i <= myPenguin.favoriteFoods.length-1; i++){
 	console.log(i + ", " +myPenguin.favoriteFoods[i]);
 }

//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)	
for (var i in myPenguin){
	console.log(`${i}`);
}

//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!
for (var key in myPenguin){
	console.log(myPenguin["key"] = myPenguin[key]);
}



/*project 4*/

 myPenguin.outfit = {
	hat: "baseball cap", 
	shirt: "Hawaiian shirt", 
	pants: "cargo shorts", 
	shoes: "flip-flops"
}
// console.log(outfit);
var penguinHatType = myPenguin.outfit.hat;
myPenguin.outfit.accessory = "pocket watch";
myPenguin.outfit.hat = "top hat";
delete myPenguin.outfit.pants;

// for(var i in myPenguin.outfit){
// 	console.log(myPenguin.outfit["i"] = myPenguin.outfit[i]);
// }


var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};


var penguins = [gunter, ramon, fred];

console.log(penguins[0]);

var secondPenguin = penguins[1];

penguins.push(myPenguin);
console.log(penguins.length);

penguins[0].canFly = "true";
penguins[0].sayHello();


for (var i in penguins){
	console.log(penguins[i].name);
}



// for(var key in penguins){
// 	console.log(penguins["key"] = penguins[key]);
// }

