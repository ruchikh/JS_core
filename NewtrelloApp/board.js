class Board{
	constructor(title){
		this.title = title;
		this.lists = [];

    this.node = createNode('div');
		this.node.classList.add('board');
		this.nodeText = createNode('h4');

		this.listNodes = createNode('div');
		this.listNodes.classList.add('lists')
	}

	render() {
    // Board
    this.nodeText.textContent = this.title;
    this.node.appendChild(this.nodeText);

    // List
    this.listForm = listForm();
    this.lists.push(new List(this, 'Add new list', 0, true));
    this.lists.forEach(list => {
    	this.listNodes.appendChild(list.node);
    });
    this.lists[this.lists.length - 1].node.appendChild(this.listForm);
    this.lists[this.lists.length - 1].listTitleNode.addEventListener('click', () => addList(this));

    this.node.appendChild(this.listNodes);
    
  }
}