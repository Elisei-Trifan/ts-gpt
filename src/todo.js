var todos = [
    {
        text: 'Учить язык',
        completed: true,
    },
];
function addTodo(text2) {
    return {
        text: text2,
        completed: false,
    };
}
function addTaskToList(task) {
    todos.push(addTodo(task));
}
function showTodos(arr) {
    arr.forEach(function (item) { return console.log(item.text, item.completed); });
}
function toggleCompleted(ind) {
    todos[ind].completed = !todos[ind].completed;
}
function editTask(ind, newText) {
    todos[ind].text = newText;
}
function removeTask(ind) {
    todos.splice(ind, 1);
}
// Взаимодействие с DOM
var addTaskBtn = document.getElementById('addTaskBtn');
var newTaskText = document.getElementById('newTaskText');
var todoList = document.getElementById('todoList');
// Функция для отображения задач на странице
function renderTodos() {
    todoList.innerHTML = ''; // Очистить список
    todos.forEach(function (todo, index) {
        var li = document.createElement('li');
        li.textContent = todo.text;
        // Кнопка для изменения статуса
        var toggleBtn = document.createElement('button');
        toggleBtn.textContent = todo.completed
            ? 'Mark as Incomplete'
            : 'Mark as Completed';
        toggleBtn.onclick = function () {
            toggleCompleted(index);
            renderTodos();
        };
        li.appendChild(toggleBtn);
        // Кнопка для редактирования
        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function () {
            var newText = prompt('Edit task:', todo.text);
            if (newText) {
                editTask(index, newText);
                renderTodos();
            }
        };
        li.appendChild(editBtn);
        // Кнопка для удаления
        var removeBtn = document.createElement('button');
        removeBtn.textContent = 'Delete';
        removeBtn.onclick = function () {
            removeTask(index);
            renderTodos();
        };
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}
// Обработчик нажатия на кнопку добавления задачи
addTaskBtn.addEventListener('click', function () {
    var taskText = newTaskText.value.trim();
    if (taskText) {
        addTaskToList(taskText);
        newTaskText.value = ''; // Очистить поле ввода
        renderTodos();
    }
});
// Инициализация
renderTodos();
