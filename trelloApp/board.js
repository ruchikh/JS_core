var createBoardLink = document.querySelector(".create-board");
var addInput = document.querySelector(".add-input");
var addList = document.querySelector(".add-list");
var listContainer = document.querySelector(".list-container");

// var allBoards = [];

class Board{
	constructor(name,list = [], id) {
		this.name = name;
		this.id;
		this.list = list;
	}

	addBoard() {
		if(this.list.length == 0) {
			this.id = 0;
		}else {
			this.id = this.list.length
		}

		class board {
			constructor(name, id, card = []){
			this.name = name;
			this.id = id;
			this.card = card
		}
			}
			var newBoardlist = new board("Add list")
		this.list.push(newBoardlist);
	}

	addCards() {
		if(this.list[0].card.length == 0) {
			this.id = 0;
		}else {
			this.id = this.list[0].card.length
		}

		var cards = {
			name: this.name,
			id: this.id,
		}

		this.list[0].card.push(cards);
	}
}


var newBoard = new Board("Altcampus");
newBoard.addBoard();
// newBoard.addCards()
addliBoard()


/*function addBoardTitle() {
	addInput.innerHTML = `<input class="board-title" type="text" name="add title" placeholder="add board title">
		<button class="create-board-btn">Create Board</button>`;
}*/

function addliBoard() {
	var boardTitle = document.querySelector(".board-title");
	addList.innerHTML = newBoard.list.map(v => {return `<h2 class="board-heading">${v.name}</h2>
		<input class="list-input" type="text" name="add-list" placeholder="+Add list">
		<button class="list-input-btn">submit</button>`});
}

function sunmitfunc(e){
	e.preventDefault();
	if(e.target.classList.contains('list-input-btn')){
		addlist()
	}
}
// newBoard.addliBoard();

 function addlist(){

 		var listadd = document.querySelector('.list-input').value;
 		console.log(listadd);

 		if(!listadd) return;
 		listContainer.innerHTML += `<h4 class="list-heading">${listadd}</h4>
 		<input class="list-input1" type="text" name="add-list" placeholder="+Add card">
 		<button class="list-input-btn">+Add Card</button>
 		`
		document.querySelector('.list-input').value = '';
 	}

 	function createCard(e)	{
 		e.preventDefault();
	if(e.target.classList.contains('card-input-btn1')){
		newBoard.addCards();
		// addcards()
	}
}
function addcards(){
	var addcard = (document.querySelector('.list-input1')).value;
	console.log(addcard);
	if(!addcard) return;	
	addInput.innerHTML += `<h5 class="card-heading">${addcard}</h4>
	<button class="card-input-btn1">+Add more Card</button>`
	document.querySelector('.list-input1').value = '';
}
 



listContainer.addEventListener("click", sunmitfunc);
addInput.addEventListener("click" , addliBoard);
addList.addEventListener("click", addlist);
addInput.addEventListener('click', createCard);