
// Write a function, `AnimalTestUser`, that has one string parameter, `username`. It returns an object with a username property.


function AnimalTestUser(username){
	var user = {};
	user.username = username;
	return user;
}

//In your AnimalTestUser function, create a check that sees how many arguments are passed. If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. Note: the arguments keyword is not a true array. Remember, it is an array-like object.

function AnimalTestUser(username){
	var user = {};
	user.username = username;
	return user;
}


var animal = {
		username: 'mac',
		species: 'vovlv',
		noises:['baahhh', 'arrgg', 'chewchewchew'],
		tagline: 'apple',
		friends: []
	}


function AnimalCreator(username, species, tagline, noises){
	var user = {};
	user.username = username;
	user.species = species;
	}

