'use strict';
//element selection
// add button
// const newtaskBtn = document.getElementsByClassName('.btn'); 

// checkboxes
const checkBtn = document.querySelectorAll('input[type="checkbox"]');






//add btn 
document.querySelector('.btn').addEventListener('click', function () {
    //get user input
    const taskInput = document.getElementById('new-task');
   
    taskInput.addEventListener("input", () => {

        console.log(taskInput.value);


    })

if (!taskInput) {
    return alert('input is empty');
}

})

console.log(taskInput.value);






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

