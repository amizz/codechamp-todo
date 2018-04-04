var todo = document.getElementById("todo");
var unauthorized = document.getElementById("unauthorized");
var headerTitle = document.querySelector('.header h1');

var name = prompt("Enter your name: ");
var password = prompt("Enter your password: ");

if(password == "123") {
  alert("Welcome! " + name);
  todo.style.display = "flex";
  unauthorized.style.display = "none";
  headerTitle.innerHTML = "Hi " + name + "!";
} else {
  alert("Unauthorized access!");
  todo.style.display = "none";
  unauthorized.style.display = "flex";
}

var countTodo = 0;
function addTodo() {
  var todoInput = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");

  if(todoInput.value.trim() !== "") {
    todoList.innerHTML += '<li id="todo-'+countTodo+'" onclick="deleteTodo(\'todo-'+countTodo+'\')">'+todoInput.value+'</li>';
    todoInput.value = "";
    countTodo++;
  } else {
    alert("Please input some text!");
    todoInput.value = "";
  }
}

function deleteTodo(id) {
  var elem = document.getElementById(id);
  return elem.parentNode.removeChild(elem);  
}