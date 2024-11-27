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
