

var ullist = document.querySelector(".todo-mvc");
var additem = document.querySelector(".addItems");
var footer = document.querySelector(".footer");
var completelink = document.querySelector(".style_completed");
var activelink = document.querySelector(".style_active");
var alllink = document.querySelector('.style_all');
var anchorlink = document.querySelector('.anchor')
var countitem = document.querySelector(".counting")


let todolist = JSON.parse(localStorage.getItem('items')) || [];

function addList(e){
	e.preventDefault();
	var text = (document.querySelector('[type=text]')).value;
		var obj = {
		text,
		done: false
	}

	todolist.push(obj);
	displaylist(todolist, ullist);
	this.reset();
	localStorage.setItem('items', JSON.stringify(todolist));
}


function displaylist(ulitem = [], arrList){
  arrList.innerHTML = ulitem.map((plate, i) => {
    return`
    <li>
      <input type = "checkbox" data-index = ${i} id ="obj${i}" class = "checkedid" ${plate.done ? 'checked' : ''}>
      <label for = "obj${i}" class = "${plate.done ? 'checkedid' : '' }">${plate.text}</label>
      <button data-id ="${i}" class = "delete">X</button>
      <button data-id ="${i}" class = "edit">edit</button>
    </li>
    `;
  }).join('');
  countitems();
 
}

/*function edititem(edit = [], arrList1){
  arrList1.innerHTML = edit.map((text, i) => {
    return`
    <li>
      <input type = "text" data-index = ${i} id ="obj${i}" class = "edit" ${text.done}>
    </li>
    `;
  }).join('');
}*/

function edititems(e){
	if(e.target.classList.contains('edit')){
		let id = e.target.dataset.id;
}
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


function active(e) {
	let activeitem = todolist.filter(ele => ele.done == false);
	localStorage.setItem('activelist', JSON.stringify(activeitem));
	displaylist(JSON.parse(localStorage.getItem('activelist')), ullist);
}

function allitems(e) {
	// let allitem = todolist.filter(ele => (ele.done == true && ele.done !== true));
	localStorage.setItem('alllist', JSON.stringify(todolist));
	displaylist(JSON.parse(localStorage.getItem('alllist')), ullist);
}

function clearcompleted(e) {
	e.preventDefault();
	todolist = todolist.filter(ele => ele.done == false);
	localStorage.setItem('alllist', JSON.stringify(todolist));
	displaylist(JSON.parse(localStorage.getItem('alllist')), ullist);
}

function countitems(){
	var itemleft = todolist.filter(elem => !elem.done).length;
	countitem.innerText = `${itemleft} Item Left`;
}



additem.addEventListener('submit', addList)
ullist.addEventListener('click', deleteitem)
ullist.addEventListener('click', edititems)
ullist.addEventListener('click', toggle)
completelink.addEventListener('click', completed)
activelink.addEventListener('click', active)
alllink.addEventListener('click', allitems)
anchorlink.addEventListener('click', clearcompleted)
// footer.addEventListener('click', completed)
displaylist(todolist, ullist)
countitems();




