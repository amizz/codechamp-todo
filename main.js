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

function addTodo(e) {
  var todoInput = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");
  
  todoList.innerHTML += "<li>"+todoInput.value+"</li>";
  todoInput.value = "";
}