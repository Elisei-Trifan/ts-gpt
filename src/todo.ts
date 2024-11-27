interface ITodo {
  text: string
  completed: boolean
}

let todos: ITodo[] = [
  {
    text: 'Учить язык',
    completed: true,
  },
]

function addTodo(text2: string): ITodo {
  return {
    text: text2,
    completed: false,
  }
}

function addTaskToList(task: string) {
  todos.push(addTodo(task))
}

function showTodos(arr: ITodo[]) {
  arr.forEach((item) => console.log(item.text, item.completed))
}

function toggleCompleted(ind: number) {
  todos[ind].completed = !todos[ind].completed
}

function editTask(ind: number, newText: string) {
  todos[ind].text = newText
}

function removeTask(ind: number) {
  todos.splice(ind)
}

// Взаимодействие с DOM
const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement
const newTaskText = document.getElementById('newTaskText') as HTMLInputElement
const todoList = document.getElementById('todoList') as HTMLUListElement

// Функция для отображения задач на странице
function renderTodos() {
  todoList.innerHTML = '' // Очистить список
  todos.forEach((todo, index) => {
    const li = document.createElement('li')
    li.textContent = todo.text

    // Кнопка для изменения статуса
    const toggleBtn = document.createElement('button')
    toggleBtn.textContent = todo.completed
      ? 'Mark as Incomplete'
      : 'Mark as Completed'
    toggleBtn.onclick = () => {
      toggleCompleted(index)
      renderTodos()
    }
    li.appendChild(toggleBtn)

    // Кнопка для редактирования
    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    editBtn.onclick = () => {
      const newText = prompt('Edit task:', todo.text)
      if (newText) {
        editTask(index, newText)
        renderTodos()
      }
    }
    li.appendChild(editBtn)

    // Кнопка для удаления
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Delete'
    removeBtn.onclick = () => {
      removeTask(index)
      renderTodos()
    }
    li.appendChild(removeBtn)

    todoList.appendChild(li)
  })
}

// Обработчик нажатия на кнопку добавления задачи
addTaskBtn.addEventListener('click', () => {
  const taskText = newTaskText.value.trim()
  if (taskText) {
    addTaskToList(taskText)
    newTaskText.value = '' // Очистить поле ввода
    renderTodos()
  }
})

// Инициализация
renderTodos()
