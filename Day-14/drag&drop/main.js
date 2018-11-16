var inputtext = document.querySelector('.input');
var addinput = document.querySelector('.add');
var ullist = document.querySelector('.ulitems');





var dragSrcEl;

function handleDragStart(e) {
  e.target.style.opacity = '0.4';
  dragSrcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

var cols = document.querySelectorAll('.draggable');
cols.forEach.call(cols, function(col) {
	DragAndDrop(col);
});

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  return false;
}

function handleDragEnter(e) {
  e.target.classList.add('over');
}

function handleDragLeave(e) {
	e.stopPropagation();
  e.target.classList.remove('over');  // this / e.target is previous target element.
}


function handleDrop(e) {
  	if(dragSrcEl != e.target) {
    dragSrcEl.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
  }


function handleDragEnd(e) {
 var listItems = document.querySelectorAll('.draggable')
  listItems.forEach.call(listItems, function (col) {
    col.classList.remove('over');
  });

  e.target.style.opacity = '1';
}



function DragAndDrop(el) {
  el.addEventListener('dragstart', handleDragStart, false);
  el.addEventListener('dragenter', handleDragEnter, false);
  el.addEventListener('dragover', handleDragOver, false);
  el.addEventListener('dragleave', handleDragLeave, false);
  el.addEventListener('drop', handleDrop, false);
  el.addEventListener('dragend', handleDragEnd, false);
}


// var alllist = [];

function addList(e){
	e.preventDefault();
	var text = inputtext.value;
	// alllist.push(text);
	displaylist();
	inputtext.value = '';
	console.log(text);
}

function displaylist(){
	// ullist.innerHTML = "";
		// data_list.forEach((elem) => { 			
		var li = document.createElement('li');
		li.className = "draggable";
		li.setAttribute('draggable',true);
		li.innerText = inputtext.value;
		ullist.appendChild(li);
		console.log(li);		
		DragAndDrop(li);
	// });
}
addinput.addEventListener('click', addList);