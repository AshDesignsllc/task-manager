function validFormFieldInput(data) {
//selecting name input
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const name = newTaskNameInput.value;
console.log("name: "+name);
//selecting description input
const newDescriptionInput = document.querySelector('#newDescriptionInput');
const description = newDescriptionInput.value;
console.log("description: "+description);
//selecting assign teammate input
const newAssignInput = document.getElementsByClassName('assign');
const assign = newAssignInput.value;
console.log("assign: "+assign);
//selecting assign tasktype
const newTaskType = document.getElementsByClassName('taskType');
const task = newTaskType.value;
console.log("task: "+task);
//selecting status update
const newStatusUpdate = document.getElementsByClassName('statusUpdate');
const statusUpdate = newStatusUpdate.value;
console.log("statusUpdate: "+statusUpdate);
}

//console.log(validFormFieldInput);

//document.getElementById('').style.display = 'hidden';

// //function () {
//     if () {

//     }
//   }

