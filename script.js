"use strict";
//element selection
// checkboxes
const checkBtn = document.querySelectorAll('input[type="checkbox"]');
//task list container

document.querySelector("#add-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const taskInput = document.getElementById("new-task").value;
  if (!taskInput) {
    return alert("Please enter a task!");
  } else {
    document.getElementById("tasks").innerHTML = taskInput;
  }
});




























//____________ ADD NEW TASK   _________

//____________ CLICK CHECKLIST TO STRIKE THROUGH___________
// checkBtn.forEach(function(el) {
//     // checkBtn.checked =true;
//     if (checkBtn.checked === true) {
// // individual task item
// // let taskItem = document.getElementsByClassName('.task-item')

// let strikeThrough = taskItem.strike()
// document.getElementsByClassName('.task-item').innerHTML=result

//     } else {

//     }
// });

// ___________ DELETE BUTTON  _________
