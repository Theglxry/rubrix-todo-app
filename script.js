"use strict";
//element selection
const newTask= document.getElementById("new-task"); //input field
const listContainer = document.getElementById("list-container"); // task list


document.getElementById('add-btn').addEventListener('click', function addTask(e) {
    e.preventDefault();

    if (newTask.value === '') {
       alert("You need to enter a task")
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = newTask.value;

        listContainer.appendChild("listItem");
    }


});









//task list container

// document.querySelector("#add-btn").addEventListener("click", function (e) {
//   e.preventDefault();

//   const taskInput = document.getElementById("new-task").value;
//   if (!taskInput) {
//     return alert("Please enter a task!");
//   } else {
//     document.getElementById("tasks").innerHTML = taskInput;
//   }
// });


