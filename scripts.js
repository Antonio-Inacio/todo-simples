const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = todoInput.value;

    if (taskText.trim() !== '') {
        addTodoItem(taskText);
        todoInput.value = '';
        todoInput.focus();
    }
});

function addTodoItem(taskText) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editIcon = document.createElement('i');
    editIcon.className = 'fa fa-pencil'; // Icone de editar
    editIcon.addEventListener('click', function() {
        editTodoItem(todoItem, taskSpan);
    });

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash'; // Icone de excluir
    deleteIcon.addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(taskSpan);
    todoItem.appendChild(editIcon);
    todoItem.appendChild(deleteIcon);
    todoList.appendChild(todoItem);

    
}

function editTodoItem(todoItem, taskSpan) {
    const newText = prompt('Edite a tarefa:', taskSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
        taskSpan.textContent = newText;
    }
}
