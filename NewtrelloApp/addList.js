function addList(board){
	board.listForm.style.display = 'block';

	var listValue = document.querySelector('.list-text');
	var listSubmit = document.querySelector('.list-submit');
	listSubmit.onclick = addNewList;
	function addNewList(e){
		e.preventDefault();
		// console.log(board.listForm)
		const value = listValue	.value
		var index = board.lists.length -1
		var list;
    if(value){
    	list = new List(board, value, index);
    	board.lists.splice(index, 0, list);
    	board.listNodes.insertBefore(list.node, board.lists[index + 1].node);
    	board.listForm.style.display = 'none';

    	listValue.value = "";

    }
	}
}


