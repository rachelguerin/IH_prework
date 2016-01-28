
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
    var newToDoText = document.getElementById('todo-input');
    newToDoItem.textContent = newToDoText.value;


    var toDoList = document.querySelector('.todo-list-items li:last-child');
    
    if (toDoList === null) {
      toDoList = document.querySelector('.todo-list-items');
      toDoList.appendChild(newToDoItem);
    } else {
      toDoList.parentNode.insertBefore(newToDoItem,toDoList.nextSibling);
    }
    newToDoText.value = "";
  }

  function markAsDone() {
    var firstToDo = document.querySelector('.todo-list-items li:first-child');
    var doneList = document.querySelector('.done-list-items li:last-child');
    
    if (firstToDo === null) {
      alert('You have done all your tasks. Go take a relaxing bath you rock star you.')
    } else {
      doneList.parentNode.insertBefore(firstToDo,doneList.nextSibling);
      firstToDo.classList.add('done');
    } 
  }
  
}
