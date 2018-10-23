// helper functions

// tasks

// me: change the background color of box1

var box1 = document.querySelector('#box1')

box1.style.background = 'orange'

// you: set the font size in box1s to 44px


var fontsize = document.querySelector('#box1s p')

fontsize.style.fontSize = '44px'

// me: shrink box2 by half
/*
var box2 = document.querySelector('#box2')
var halfWidth = 250 / 2
box2.style.width = halfWidth + "px"
var halfHeight = 200 / 2
box2.style.height = halfHeigh + "px"
*/
// double the size of box2s


var fontsize = document.querySelector('#box2s')
box2s.style.height = "500px";
box2s.style.width = "400px";


// put a circle in the middle of box3 use the class named 'circle' you need to add <div class="circle"></div> in the innerHTML of the box
// **using .innerHTML**

var getdiv = document.getElementById('box3');
getdiv.innerHTML = '<div class="circle"></div>';





// **using .appendChild()**
var divmid = document.createElement('div');
divmid.className = "circle";
var box3 = document.querySelector("#box3s")
box3.appendChild(divmid);



//remove the circle from box3s
// **using .innerHTML**
/*var bax3s = document.getElementById('box3s');
bax3s.innerHTML = '<div class="circle"></div>';
bax3s.innerHTML = " ";*/


// **using .removeChild()**


box3s.removeChild(divmid)
/*var divbox3s = document.createElement('div');
divbox3s.className = "circle";*/
/*divmid.parentNode.removeChild();
box3s.appendChild(divmid);*/


// write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".

/*var box5 = document.getElementById('box5');

function clearFinished(){
	var box5node = document.querySelectorAll('#box5 ul li');
	box5node.forEach(ele => {
		if(ele.classList.contains('done')){
		ele.style.display = "none";
	}
	})
}*/


//write a function for #box5 that takes all the completed chores and moves them to #box5s

var box5 = document.getElementById('box5');
var box5s = document.getElementById('box5s');

function completedchores(){
	var box5node = document.querySelectorAll('#box5 ul li');
	box5node.forEach(ele => {
		if(ele.classList.contains('done')){
	  box5s.appendChild(ele);
	}
	})
}

// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."

function addChore(){
		var newlist = document.querySelector('#box5 ul');
		var li = document.createElement('li');
		li.innerText = "new li Undone";
		li.className = "undone";
		newlist.appendChild(li);
}

//do this task using the .appendChild() or innerHTML


//reverse the text in #box6

var box6 = document.querySelector('#box6 p').textContent;
var reversestr = box6.split(" ").reverse().join(" ");
box6.innerText = reversestr;
console.log(reversestr);

// put <em></em> tags around the word "keep" in #box6s


var fontsize = document.querySelector('#box6s p').textContent;








