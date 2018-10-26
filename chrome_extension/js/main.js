// clock
const clock = document.querySelector('.clock');
var prompt = document.querySelector('.prompt-name')


function setDate() {
	const now = new Date();
	const second = now.getSeconds();
	const minute = now.getMinutes();
	const hour = now.getHours();
	clock.innerText = `${hour}: ${minute}: ${second}`
}
setInterval(setDate, 1000);
setDate();



// Todo-list

var ullist = document.querySelector(".todo");
var additem = document.querySelector(".addItems");
var footer = document.querySelector(".footer");



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
	this.reset();
}

function displaylist(ulitem = [], ullist){
  ullist.innerHTML = ulitem.map((plate, i) => {
    return `
    <li>
      <input type = "checkbox" data-index = ${i} data-id ="${i}" class = "checkedid" ${plate.done ? 'checked' : ''}>
      <label for = "${i}" class = "${plate.done ? 'checkedid' : '' }">${plate.text}</label>
      <button data-id ="${i}" class = "delete">X</button>
    </li>
    `
  }).join('');
 
}

function deleteitem(e){
	if(e.target.classList.contains('delete')){
		let id = e.target.dataset.id;
		todolist.splice(id, 1);	
		displaylist(todolist, ullist);
	}
}

function toggle(e) {
	if(!e.target.classList.contains('checkedid')) return;
	let index = e.target.dataset.index;
	todolist[index].done = !todolist[index].done;
	localStorage.setItem('items', JSON.stringify(todolist));
	displaylist(todolist, ullist);
}

function completed(e) {
	let completeitem = todolist.filter(ele => ele.done);
	localStorage.setItem('completeitemlist', JSON.stringify(completeitem));
	displaylist(JSON.parse(localStorage.getItem('completeitemlist')), ullist);
}



additem.addEventListener('submit', addList)
ullist.addEventListener('click', deleteitem)
ullist.addEventListener('click', toggle)
displaylist(todolist, ullist)



let userName = document.querySelector('.prompt')
 var promttext = document.querySelector('.prompt-name')
 var promtuser = document.querySelector('.userlist');

let name = JSON.parse(localStorage.getItem('user')) || [];

function addName(e){
	// e.preventDefault();
	var text = (document.querySelector('.prompt-name')).value;
  userName.innerHTML = `<h2> Welcome ${text} </h2>`
	name.push(text);
	 // displaylist(text, promtuser);
	localStorage.setItem('user', JSON.stringify(name));
	this.reset();
}

/*function displayuser(useritem = [], promtuser){
  promtuser.innerHTML = useritem.map((text, i) => {
    return `
    <li>
      <input type = "text" data-index = ${i} data-id ="${i}">
    </li>
    `
  }).join('');
 
}*/




promttext.addEventListener('keydown', function(e){
	if(e.keyCode == 13){
		addName();
	}
})






