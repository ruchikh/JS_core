var myPenguin = {
	character : "Penguin Puck",
	origin: "Love Birds",
	author: "Robert J. Sherman",
	canFly: false,

	chirp: function() {
		console.log("CHIRP CHIRP! Is this what penguins sound like?");
	},

	sayHello(){
		console.log("Hello, I'm a penguin and my name is" + " " + this.character);
	},

	fly(){
		if(this.canFly==false){
			console.log("No flying for me!");
		}
		else {
			console.log("I can fly!");
		}
	},



}

// console.log("Hello, I'm a penguin and my name is" + myPenguin.character);

// myPenguin.canFly = false;
// myPenguin.favoriteFoods = ["beats", "bread", "rice"]
/*console.log(myPenguin);
myPenguin.canFly = true;*/
/*console.log(myPenguin.favoriteFoods[1]);
var firstFavFood = myPenguin.favoriteFoods[0];
console.log(firstFavFood);
myPenguin.favoriteFoods.push("icecream");
myPenguin.favoriteFoods.length;
myPenguin.favoriteFoods.length.push("pineapples");

 var lastFavFood = myPenguin.favoriteFoods.length-1;

 for(var i=0; i <= myPenguin.favoriteFoods.length-1; i++){
 	console.log(i + ", " +myPenguin.favoriteFoods[i]);
 }
*/
/*for(var i in myPenguin){
	console.log(`${i}`);
}


for(var key in myPenguin){
	console.log(myPenguin["key"] = myPenguin[key]);
}*/



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

for(var i in myPenguin.outfit){
	console.log(myPenguin.outfit["i"] = myPenguin.outfit[i]);
}