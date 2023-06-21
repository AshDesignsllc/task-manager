//Make sure to add data attribute to delete button the same way it was done on the 'mark as done' on line 8
const createTaskHtml = (name, description, assign, dueDate, status, id) => {
  const html = ` 
  <div class="col">
      <div class="card border-success mb-3 h-100" data-task= ${id}>
          <div class="card-header">Task created successfully</div>
          <div class="card-body text-success">
          <button class="done-button">Mark as done</button>
          <ul>
              <li class="card-title">${name}</li>
              <li class="card-text">${description}</li>
              <li class="card-text">${assign}</li>
              <li class="card-text">${dueDate}</li>
              <li class="card-text">${status}</li>
              <li id="data-task-id"> ${id}</li>

              </ul>
          </div>
      </div>
  </div>
  `;
  return html;
};

class TaskManager {
  constructor(currentId = 0) {
    // in the real world you'd want to use something like uuid libary - v4()
    // and you would generate the id in the function
    this.currentId = currentId;
    this.tasks = [];
  }
  addTask(name, description, assign, task, dueDate, status = "TODO") {
    // This is the task object that's being created
    this.currentId++; //real world id: v4()
    let id = this.currentId;
    this.tasks.push({
      name,
      description,
      assign,
      task,
      dueDate,
      status,
      id,
    });
  }
  render(element) {
    let taskHtmlList = "";
    this.tasks.forEach((task) => {
      // const date = new Date(task.dueDate);
      console.log(task.dueDate);
      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assign,
        task.dueDate,
        task.status,
        task.id
      );
      taskHtmlList += taskHtml;
    });
    element.innerHTML = taskHtmlList;
  }
  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
      }
      return foundTask;
    }

    //Try to make forEach work if you want
    // this.tasks.forEach((task) => {
    //   if (taskId == task.id) {
    //     foundTask = task;
    //     return foundTask;
    //   }
    //   // else {
    //   //   console.log("hello");
    //   // }
    // });
  }
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// array.forEach((val, index) => {
//   const element = val;
// })

//All functions should have verbal name
