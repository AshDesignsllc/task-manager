//Make sure to add data attribute to delete button the same way it was done on the 'mark as done' on line 5
const createTaskHtml = (name, description, assign, taskType, dueDate, status, id) => {
  const html = ` 
  <div class="col">
      <div class="card border-success mb-3 h-100" data-task= ${id}>
          <div class="card-header">Task created successfully</div>
          <div class="card-body text-success">
          <ul>
              <li class="card-title">${name}</li>
              <li class="card-text">${description}</li>
              <li class="card-text">${assign}</li>
              <li class="card-text">${taskType}</li>
              <li class="card-text">${dueDate}</li>
              <li class="card-text">${status}</li>
              
              </ul>
          <button class="done-button btn-outline-danger">MARK AS DONE</button>
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
  addTask(name, description, assign, taskType, dueDate, status = "TODO") {
    // This is the task object that's being created
    this.currentId++; //real world id: v4()
    let id = this.currentId;
    this.tasks.push({
      name,
      description,
      assign,
      taskType,
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
        task.taskType,
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
      
    } return foundTask;
  }   
  save() {
    const tasksJson = JSON.stringify(this.tasks);

    localStorage.setItem("task",tasksJson);
    // let currentId = ("this.currentId")
    let currentId = this.currentId.toString();
    //Task 8-5
    localStorage.setItem("currentId",JSON.stringify(currentId));
}
load() {

if (localStorage.getItem("task")) {
  //must be loaded as a string becase it was stringified while saving
  const tasksJson = localStorage.getItem("task");
  if(tasksJson)this.tasks =JSON.parse(tasksJson);
  //5
} 
  if (localStorage.getItem("currentId")) {
    const currentId = localStorage.getItem("currentId");
    //8.6
    this.currentId = Number(currentId);
  }

}};


//In the load method, check if any tasks are saved in localStorage with localStorage.getItem().
// If any tasks are stored, get the JSON string of tasks stored in localStorage with localStorage.getItem(), making sure to pass the key we used to save the tasks, tasks. Store this string into a new variable, tasksJson.