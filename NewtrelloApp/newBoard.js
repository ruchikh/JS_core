class NewBoard{
	constructor(board, title){
		this.board = board;
		this.title = title;
		this.newboard = [];
    
    this.node = createNode('div');
    this.nodeHeading = createNode('h2')
    this.nodeHeading.textContext = this.title;
    this.node.appendChild(this.nodeHeading);
	}

	
}

var newBoard = new NewBoard(this, "Altcampus Board")


