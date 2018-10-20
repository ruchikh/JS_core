//Select the section with an id of container without using querySelector.
document.getElementById('container');

//Select the section with an id of container using querySelector.

document.querySelector('#container');
 

//Select all of the list items with a class of "second".
var li = document.getElementsByTagName('li');
document.getElementsByClassName('second');



//Select a list item with a class of third, but only the list item inside of the ol tag.
var thirrdlest = document.querySelector('ol');
thirrdlest.getElementsByClassName('third');
console.log(thirrdlest);

//Give the section with an id of container the text "Hello!".

var innerTextcon = document.getElementById('container')

innerTextcon.innerHTML += "hello";
console.log(innerTextcon);


//Add the class main to the div with a class of footer.
  
 var footer = document.querySelector(".footer");
 footer.className += " " + "main";
 console.log(footer);

//Remove the class main on the div with a class of footer.

var footer1 = document.querySelector(".footer");
 footer1.classList.remove("main");
 console.log(footer1);


//Create a new li element.

	var li = document.createElement('li');

//Give the li the text "four".

	li.innerText = "Four";
	console.log(li);



//Append the li to the ul element.
var ul = document.querySelector('ul');
ul.appendChild(li);
console.log(ul);



//Loop over all of the list inside the ol tag and give them a background color of "green".

var listItem = document.querySelectorAll('ol');
   	var list = listItem.forEach(element => {
     	element.style.background = "green";
   	});

//Remove the div with a class of footer.

var removefooter = document.querySelector(".footer");
removefooter.remove();




