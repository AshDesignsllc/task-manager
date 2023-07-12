const taskManager = new TaskManager();
//This should only be initialized once thus
//why this is at the top and not connected to any other functions
//Answer to Step 8.8 to render and locally save Cards on page. When it is commented in, cards disappear.
const taskCards = document.querySelector("#taskCards");
const newTaskNameInput = document.querySelector("#newTaskNameInput");
const newDescriptionInput = document.querySelector(".newDescriptionInput");
const newAssignInput = document.querySelector("#assignedTo");
const newTaskType = document.querySelector("#taskType");
const newStatusUpdate = document.querySelector("#statusUpdate");
const dueDate = document.querySelector(".dueDate");
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll(".needs-validation");
const tasksListVariable = document.querySelector("#taskCards");
const markAsDoneBtn = document.querySelector(".done-button");
//create task manager first then use the addTask method once the user has added data
// const _tasksManager = new TaskManager.addTask(tasks);
//getElementsByClass returns a nodes list, you cannot access a single value of a node list,
// instead you must query select it with class or ID, as getElementsByClass will pull multiple values
// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      // taskManager.getTaskById(1); TEST FOR ID LOOP
      event.preventDefault();
      if (form.checkValidity()) {
        // event.stopPropagation();
        console.log("Validated and called");
        const name = newTaskNameInput.value;
        const description = newDescriptionInput.value;
        const assigned = newAssignInput.value;
        const task = newTaskType.value;
        const statusUpdate = newStatusUpdate.value;
        const dueDateInput = dueDate.value;
        // if valid add task here // tasks.addTask(parameters)
        taskManager.addTask(
          name,
          description,
          assigned,
          task,
          dueDateInput,
          statusUpdate
        );
        taskManager.save();
        taskManager.render(taskCards);
        // taskManager.save();
        form.classList.add("was-validated");
        console.log(taskManager.tasks);
        //Resetting the form on the line below
        console.log(form.classList);
        form.classList.remove("was-validated");
        console.log(form.classList);

        form.reset();
        console.log("Form has been reset");
      } else {
        event.stopPropagation();
        console.log("Was not validated!");
      }
      // form.classList.remove("was-validated");
    },
    false
  );
});

taskManager.load();
taskManager.render(taskCards);

taskCards.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    console.log('Mark as done button clicked');
    let parent = event.target.parentElement.parentElement;
    console.log(parent);
    const taskId = Number(parent.dataset.task);
    console.log(taskId);
    let task = taskManager.getTaskById(taskId);
    task.status = 'Done';
    taskManager.save();
    taskManager.render(taskCards);
    // taskManager.save();
    console.log(task);
  } 
  if (event.target.classList.contains("delete-button")) {
    let parent = event.target.parentElement.parentElement;
    console.log(parent);
    const taskId = Number(parent.dataset.task);
    taskManager.deleteTask(taskId);
    console.log('it worked!');
    taskManager.save();
    taskManager.render(taskCards);
  }
//In js/index.js, after both adding a new task and updating a task's status to done, call taskManager.save() to save the tasks to localSorage.
// taskManager.save();

});

// const taskHtml = createTaskHtml(
//   "Code",
//   "pass code",
//   "J",
//   "write code",
//   "07-11-23",
//   "TODO"
// );
// console.log(taskHtml);
// function validFormFieldInput(data) {
//   //selecting name input
//   console.log("name: " + name);
//   //selecting description input
//   console.log("description: " + description);
//   //selecting assign teammate input
//   console.log("assign: " + assign);
//   //selecting assign tasktype
//   console.log("task: " + task);
//   //selecting status update
//   console.log("statusUpdate: " + statusUpdate);
// }
// };
// window.onload = function (e) {
// var forms = document.querySelectorAll(".needs-validation");
// Array.prototype.slice.call(forms).forEach(function (form) {
//   form.addEventListener("submit", function (event) {
//     if (!form.checkValidity()) {
//       event.preventDefault();
//       event.stopPropagation();
//     } else {
//       // if valid add task here // tasks.addTask(parameters)
//       this.tasks.push(
//         new TaskManager(
//           taskNameValue,
//           descriptionInputValue,
//           assignedToValue,
//           taskTypeValue,
//           statusValue,
//           dueDateValue
//         )
//       );
//       form.classList.add("was-validated");
//     }
//     false;
//   });
//   console.log(forms, _tasksManager);
// }