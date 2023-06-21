const taskManager = new TaskManager();
//This should only be initialized once thus
//why this is at the top and not connected to any other functions
const taskCards = document.querySelector("#taskCards");
const newTaskNameInput = document.querySelector("#newTaskNameInput");
const newDescriptionInput = document.querySelector(".newDescriptionInput");
const newAssignInput = document.querySelector("#assignedTo");
const newTaskType = document.querySelector("#taskType");
const newStatusUpdate = document.querySelector("#statusUpdate");
const dueDate = document.querySelector(".dueDate");

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll(".needs-validation");

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
        taskManager.render(taskCards);
        form.classList.add("was-validated");
        console.log(taskManager.tasks);
        //Resetting the form on the line below
        form.reset();
        console.log("Form has been reset");
      } else {
        event.stopPropagation();
        console.log("Was not validated!");
      }
      form.classList.add("was-validated");
    },
    false
  );
});

const tasksListVariable = document.querySelector("#taskCards");
taskCards.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    console.log("Done button clicked");
  }
  let parent = event.target.parentElement.parentElement;
  const taskId = Number(parent.dataset.task);
  console.log(taskId);
  let task = taskManager.getTaskById(taskId);
  task = 'Done';
  console.log(task);
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
