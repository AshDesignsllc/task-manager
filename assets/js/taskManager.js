const createTaskHtml = (name, description, assign, dueDate, status) => {
  const html = ` 
  <div class="col">
      <div class="card border-success mb-3 h-100">
          <div class="card-header">Task created successfully</div>
          <div class="card-body text-success">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${description}</p>
              <p class="card-text">${assign}</p>
              <p class="card-text">${dueDate}</p>
              <p class="card-text">${status}</p>
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
        task.status
      );
      taskHtmlList += taskHtml;
    });
    element.innerHTML = taskHtmlList;
  }
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// array.forEach((val, index) => {
//   const element = val;
// })

//All functions should have verbal name
