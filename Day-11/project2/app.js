var addlist = document.querySelector('.add-list');
var button = document.querySelector('button')
var ul = document.querySelector('ul')
var bookitem = document.querySelector('.book-item')

var arrlist = JSON.parse(localStorage.getItem('todo'))|| [];

function addBook(e){
	e.preventDefault();
	var text = addlist.value;
	arrlist.push(text);
	booklist(arrlist);
}

function booklist(data_list = []){
	ul.innerHTML = "";
		data_list.forEach((elem) => { 			
		var li = document.createElement('li');
		li.innerText = elem;
		ul.appendChild(li);	
	});
		localStorage.setItem("todo", JSON.stringify(arrlist));
}


var hideitem = document.querySelector('#hide')
function hidebook(e){
 if(e.target.checked == true) {
		ul.innerHTML = ""; 	
 		} else if(e.target.checked == false){
 			booklist(arrlist);
 	}
}

var searchArea = document.querySelector("#bookInput");
function search(e){
 	var value = e.target.value.toLowerCase();
 	var searchitem1 =  arrlist.filter(v => v.toLowerCase().includes(value));
  booklist(searchitem1);
}

hideitem.addEventListener('click', hidebook);
searchArea.addEventListener('keyup', search)
button.addEventListener('click', addBook)
 
booklist(arrlist);