function addCard(list) {
  list.cardForm.style.display = 'block';
  const cardText = list.cardNodes.querySelector('.card-text')
      , cardSubmit = list.cardNodes.querySelector('.card-submit');
  cardSubmit.onclick = addNewCard;
  function addNewCard(e){
    e.preventDefault();
    let title = `${cardText.value} <button class="del-btn">x</button> <button class="edit-btn">edit</button>`
      , card;
    card = new Card(list, title);
    cardText.value = "";
    list.cardForm.style.display = 'none';
    console.log(list.cardForm.style.display)
    list.cardNodes.insertBefore(card.node, list.cards[list.cards.length - 1].node)
  }
}


var delbutton = document.querySelector('.card');


function delelecard(e){
  if(e.target.classList.contains('del-btn')){
    e.target.parentElement.parentElement.remove();
  }
}


function myEdit(e) {
e.preventDefault();
if(e.target.classList.contains('edit-btn')){
var editText =  document.querySelectorAll(".cardText");
console.log(document.querySelectorAll(".cardText").value);
let edit = e.target.parentElement;
console.log(edit.firstChild.textContent);
var texteditcontent = edit.firstChild.textContent;
edit.innerHTML = `<form> <input type="text" value="${texteditcontent}" class="card-edit"></input>
 <button id="submit-edit-btn">edit</button>
</form>`;

let submitbutton = document.getElementById('submit-edit-btn');
submitbutton.addEventListener('click', function(e){
 if(e.target.id == 'submit-edit-btn'){
  let editcardvalue = document.querySelector('.card-edit').value;
  let editvaluetext = `${editcardvalue} <button class="del-btn">x</button> <button class="edit-btn">edit</button>`;
  edit.innerHTML = editvaluetext;

  if(!editcardvalue) return
 }
});

}  
}


