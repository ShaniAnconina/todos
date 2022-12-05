
function onInit() {
    renderTodos()
}

function renderTodos() {

    const todos = getTodosForDisplay()
    console.log('todos:', todos)
    if(!todos.length) {
        document.querySelector('.no-todos').innerText = `No todos in ${getFilterBy()} folder`
    }
    const strHTMLs = todos.map(todo => `
    <li class="${(todo.isDone) ? "done" : ""}"
         onclick="onToggleTodo('${todo.id}')">
         <button class="ul-btn" onclick="onRemoveTodo(event,'${todo.id}')">x</button> 
         ${todo.txt}
    </li>` )

    document.querySelector('.todo-list').innerHTML = strHTMLs.join('')
    document.querySelector('.total-todos').innerText = getTotalTodos()
    document.querySelector('.active-todos').innerText = getActiveTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()
    const elTxt = document.querySelector('input[name="todo-txt"]')
    const txt = elTxt.value
    console.log('txt:', txt)
    const elImportance = document.querySelector('input[name="todo-importance"]')
    const importance = elImportance.value
    console.log('importance:', importance)
    if (elTxt.value) addTodo(txt, importance)
    else alert('You can\'t add an empty Todo')
    elTxt.value = ''
    elImportance.value = ''
    renderTodos()

}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    // console.log('Removing', todoId)
    if (confirm('Do you really want to remove this Todo?')){
        removeTodo(todoId)
        renderTodos()
    }
}

function onToggleTodo(todoId) {
    // console.log('Toggling', todoId)
    toggleTodo(todoId)
    renderTodos()
}

function onSetFilter(filterBy) {
    // console.log('filterBy', filterBy)
    setFilter(filterBy)
    renderTodos()
}

function onSetSort(sortBy){
    setSort(sortBy)
    renderTodos()
}
