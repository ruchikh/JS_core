// clock
const clock = document.querySelector('.clock');
var prompt = document.querySelector('.prompt-name')
var greet = document.querySelector('.greeting')


function setDate(){
	let now = new Date();
	let second = now.getSeconds();
	let minute = now.getMinutes();
	let hours = now.getHours();

	if(hours < 10){
		hours = `0${hours}`

	} if(minute < 10){
		minute = `0${minute}`

	} if(second < 10){
		second = `0${second}`
	}
	
	clock.innerText = `${hours} : ${minute}`;
  setgreeting(hours)
	
}
setInterval(setDate, 1000);
setDate();

function setgreeting(hours){
	if(hours < 12){
			greet.innerText =  `Good Morning`
		}else if(hours >= 12 && hours < 17){
			greet.innerText = `Good Afternoon`
		}else if(hours >= 17 && hours < 20 ){
			greet.innerText = `Good Evening`
	}else if(hours >= 20){
			greet.innerText = `Good Night`
	}
}

// Todo-list

var ullist = document.querySelector(".todo");
var additem = document.querySelector(".addItems");
var text = document.querySelector('.todo-text')
var anchorlink = document.querySelector('.anchor')
var countitem = document.querySelector(".counting")
var completelink = document.querySelector(".style_completed");
var alllink = document.querySelector('.style_all');
anchorlink.style.display = 'none';



let todolist = JSON.parse(localStorage.getItem('items')) || [];

function addList(e){
	e.preventDefault();
	var text = (document.querySelector('.todo-text')).value;
		var obj = {
		text,
		done: false
	}

	todolist.push(obj);
	displaylist(todolist, ullist);
	localStorage.setItem('items', JSON.stringify(todolist));
	e.target.reset();

}


function displaylist(ulitem = [], ullist){
  ullist.innerHTML = ulitem.map((plate, i) => {
    return `
    <li>
      <input type = "checkbox" data-index = ${i} data-id ="${i}" class = "checkedid" ${plate.done ? 'checked' : ''}>
      <label for = "${i}" class = "${plate.done ? 'checkedid' : '' }">${plate.text}</label>
      <button data-id ="${i}" class = "delete">[X]</button>
    </li>
    `
  }).join('');
  countitems();
 
}


function deleteitem(e){
e.preventDefault();
	if(e.target.classList.contains('delete')){
		anchorlink.style.display = 'none';
		let id = e.target.dataset.id;
		todolist.splice(id, 1);	
		localStorage.setItem('items', JSON.stringify(todolist));
		displaylist(todolist, ullist);

	}
}


function toggle(e) {
	anchorlink.style.display = 'inline-block';
	if(!e.target.classList.contains('checkedid')) return;
	let index = e.target.dataset.index;
	todolist[index].done = !todolist[index].done;
	displaylist(todolist, ullist);
}

function allitems(e) {
	localStorage.setItem('alllist', JSON.stringify(todolist));
	displaylist(JSON.parse(localStorage.getItem('alllist')), ullist);
}

function clearcompleted(e) {
	anchorlink.style.display = 'none';
	e.preventDefault();
	todolist = todolist.filter(ele => ele.done == false);
	localStorage.setItem('items', JSON.stringify(todolist));
		displaylist(todolist, ullist);
}

function completed(e) {
	let completeitem = todolist.filter(ele => ele.done);
	localStorage.setItem('completeitemlist', JSON.stringify(completeitem));
	displaylist(JSON.parse(localStorage.getItem('completeitemlist')), ullist);
}




function countitems(){
	var itemleft = todolist.filter(elem => !elem.done).length;
	countitem.innerText = `${itemleft} Item Left`;
};


anchorlink.addEventListener('click', clearcompleted)
additem.addEventListener('submit', addList)
ullist.addEventListener('click', deleteitem)
ullist.addEventListener('click', toggle)
completelink.addEventListener('click', completed)
displaylist(todolist, ullist)
countitems();


// USER INPUT

let userName = document.querySelector('.prompt')
var promttext = document.querySelector('.prompt-name')
var promtuser = document.querySelector('.userlist');
let name = JSON.parse(localStorage.getItem('user')) || '';

function addName(e){
	if(!name){
		var text = (document.querySelector('.prompt-name')).value;
		name = text;
}
  userName.innerHTML = `<h2> Welcome ${name} :)</h2>`
	localStorage.setItem('user', JSON.stringify(name));

}
if(name){
	  addName();
}


promttext.addEventListener('keydown', function(e){
	if(e.keyCode == 13){
		addName();
	}
});

function Person(firstName, lastName) { 
	this.firstName = firstName,
	this.lastName = lastName, 
	this.fullName = function() { 
		return this.firstName + " " + this.lastName; 
	}
}


var background = document.querySelector('body')
function setRandomBg(){
		var url = `https://api.unsplash.com/photos/random/?client_id=812c49a270eb37b905abac01de73a44085f7e6f8791eeed2aac1c87f04a18169`;
	  fetch(url).then(data => data.json()).then(resp => {
	  background.style.backgroundImage = `url(${resp.urls.regular})`;
	});
}

setRandomBg();


