var form = document.querySelector('.form');
var todoInput = document.querySelector('.todo-input');
var ul = document.querySelector('.todo-list');
var search = document.querySelector('.search-input')
var searchForm = document.querySelector('.search-input')

var todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

function addTodo(e) {
    e.preventDefault();
    let inputValue = todoInput.value;
    var todoObj = {
        value: inputValue,
        done: false
    }
    
    todoArray.push(todoObj);
    localStorage.setItem("todoArray", JSON.stringify(todoArray));

    displayTodo(todoArray);
    todoInput.value = '';
}

function displayTodo(array) {
    console.log(array)
    ul.innerHTML = '';
    array.forEach((item, i) => {
        ul.innerHTML += `<li>
        <span>${item.value}</span>
        <button class='btn' id=${i}>X</button>
        <button class='edit-btn' id=${i}>edit</button>
        </li>`;
    })

}

function deleteTodo(e) {
    var id = e.target.id;
    if(e.target.className != 'btn') return
    todoArray.splice(id, 1)
    displayTodo(todoArray);
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
}

function searchTodo(e) {
    var input = e.target.value.toLowerCase();
    console.log(todoArray)
    const filterList = todoArray.filter(list => list.value === input)
    displayTodo(filterList)
    console.log(filterList)
}

function editTodo(e){
    if(e.target.className != 'edit-btn') return
    var editable = todoArray[e.target.id].value;
    todoInput.value = editable;
    todoArray.splice(e.target.id, 1)
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
}

displayTodo(todoArray)


searchForm.addEventListener('keyup', searchTodo)
ul.addEventListener('click', editTodo)
ul.addEventListener('click', deleteTodo)
form.addEventListener('submit', addTodo)