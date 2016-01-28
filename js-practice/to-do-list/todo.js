
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var newToDoItem = document.createElement('li');
    var newToDo = document.getElementById('todo-input');
    newToDoItem.textContent = newToDo.value;
    var toDoList = document.querySelector('.todo-list-items li:last-child');
    toDoList.parentNode.insertBefore(newToDoItem,toDoList.nextSibling);
    newToDo.value = "";
  }

  function markAsDone() {
    var firstToDo = document.querySelector('.todo-list-items li:first-child');
    var doneList = document.querySelector('.done-list-items li:last-child');
    doneList.parentNode.insertBefore(firstToDo,doneList.nextSibling);
    firstToDo.classList.add('done');

    // firstToDo.parentNode.removeChild(firstToDo);  
  }
  
}
