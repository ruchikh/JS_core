class Card{
	constructor(list, title){
		this.list = list;
		this.title = title;
		this.id = list.getnextcardid();
		this.node = createNode('div');
		this.node.setAttribute('data-id', this.id)
		this.node.className = "card";
		this.cardList = createNode('p');
		this.cardList.className = "cardText";
		this.cardList.innerHTML = this.title;
		this.node.appendChild(this.cardList);
	}
}

