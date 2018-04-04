var name = prompt("Enter your name: ");
var password = prompt("Enter your password: ");

var todo = document.getElementById("todo");
var unauthorized = document.getElementById("unauthorized");

if(password == "123") {
  alert("Welcome! " + name);
  todo.style.display = "block";
  unauthorized.style.display = "none";
} else {
  alert("Unauthorized access!");
  todo.style.display = "none";
  unauthorized.style.display = "block";
}

function addTodo(e) {
  var todoInput = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");
  
  todoList.innerHTML += "<li>"+todoInput.value+"</li>";
  todoInput.value = "";
}