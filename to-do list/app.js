// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// EventListner
todoButton.addEventListener('click', addtodo);
todoList.addEventListener('click', deleteCheck);
// Function
function addtodo(event){
    // prevent form from submitting
        event.preventDefault();
    // Create a DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    todoList.appendChild(todoDiv);
    // Create a List
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    newTodo.innerText = value();
    // value
    function value(){
        if (todoInput.value === ''){
            alert('Can not be empty');
        }
        else{
            return todoInput.value;
        }
    }
    //create complete button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    todoDiv.appendChild(completeButton);

    //create trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fa fa-minus-circle"></i>'
    todoDiv.appendChild(trashButton)

    // clear todo input
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    // delete item
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    // complete item

    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('complete');
    }
}   