class List {
  constructor(board, title, index, dummyList) {
    this.board = board;
    this.title = title;
    this.index = index;

    let cardid = 0;
     this.getnextcardid= function(){
    	return cardid++;
    }


    this.node = createNode('div');
    this.node.className = "three columns list";
    this.listTitleNode = createNode('h5');
    this.listTitleNode.textContent = this.title;
    this.node.appendChild(this.listTitleNode);

 
    this.cardNodes = createNode('div');
    this.cardNodes.className = 'cards';

    if(!dummyList) {
      this.cards = [new Card(this, 'Add New Card..')];
      this.cardForm = cardForm();
      this.cards[this.cards.length - 1].node.appendChild(this.cardForm);
      this.cards.forEach(card => {
        this.cardNodes.appendChild(card.node);

      });
      this.cardNodes.addEventListener('click', delelecard);
      this.cardNodes.addEventListener('click', myEdit);

      this.node.appendChild(this.cardNodes);
      this.cards[this.cards.length - 1].cardList.addEventListener('click', () => addCard(this))


    }
  }
}
