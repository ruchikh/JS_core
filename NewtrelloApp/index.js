document.body.onload = function(){
	var board = new Board('Learning Devtools');
	board.render();
	 document.getElementById('main').appendChild(board.node);
    console.log(board);
}