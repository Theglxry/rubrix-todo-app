"use strict";
//element selection
const newTask = document.getElementById("new-task"); //input field
const listContainer = document.getElementById("list-container"); // task list

document.getElementById("add-btn").addEventListener("click", function (e) {
    e.preventDefault();

    if (newTask.value === "") {
      alert("You need to enter a task");
    } else {
      let listItem = document.createElement("li");
      listItem.innerHTML = newTask.value;

      // creating a delete icon
      let deleteIcon = document.createElement("img");
      deleteIcon.setAttribute("src", "images/icons8-delete-64.png");
      deleteIcon.setAttribute("alt", "delete");
      deleteIcon.setAttribute("class", "delete-icon");

      // Append the delete icon to the list item
      listItem.appendChild(deleteIcon);
      listContainer.appendChild(listItem);
    }

    newTask.value = ""; // Clear the input field
    saveData();
  });

//strike through
listContainer.addEventListener("click", function (e) {
    //when clicked target element is list element
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData(); //save data that's checked.
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove(); //delete task
    }
  },
  false
);

//storing data in local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}


// Displaying stored data
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();

 