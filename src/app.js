console.log('App starts');
const todoList = [];
const onTodoFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submit');
    const $todo = $('input[name="todo"]');
    console.log("val", $todo.val());
    const todoItem = {title: $todo.val(), done: false};
    todoList.push(todoItem);
    console.log("todoList", todoList);

};
$(`#todoForm`).on("submit", onTodoFormSubmit);