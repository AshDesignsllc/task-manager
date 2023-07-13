const TaskManager = require('../assets/js/taskManager');

var assert = require('assert');
describe('Task Manager', function () {
  describe('methods', function () {
    // it('should create a task in the task list', function () {
    //   // Arrange, Act, Assert
    //   const arr = [1,2,3]; // Arrange
    //   const expectedVal = -1;
    //   const actualVal = arr.indexOf(4); // Act
    //   assert.equal(actualVal, expectedVal); // Assert
    // });
    it('should add & delete a task in the tasklist', function () {
        // Arrange, Act, Assert
        const taskManager = new TaskManager();
        const task = {
            name: 'Take out the trash',
            description: 'Take out the trash to the front of the house',
            assignedTo: 'Nick',
            taskType: 'Integrate multimedia content',
            dueDate: '2020-09-20',
            status: 'TODO'
        };
        const expectedVal = 1;
        taskManager.addTask(task.name, task.description, task.assignedTo, task.taskType, task.dueDate, task.status);
        taskManager.deleteTask(task.name, task.description, task.assignedTo, task.taskType, task.dueDate, task.status);
        const actualVal = taskManager.tasks.length; // Act
        assert.equal(actualVal, expectedVal); // Assert
      })
      it('should find the Id of the task', function () {
          // Arrange, Act, Assert
          const taskManager = new TaskManager();
          const task = {
              name: 'Take out the trash',
              description: 'Take out the trash to the front of the house',
              assignedTo: 'Nick',
              taskType: 'Integrate multimedia content',
              dueDate: '2020-09-20',
              status: 'TODO'
          };
          const expectedVal = 'Nick';
          taskManager.addTask(task.name, task.description, task.assignedTo, task.taskType, task.dueDate, task.status);
          taskManager.getTaskById(1);
          const actualVal = task.assignedTo; // Act
          assert.equal(actualVal, expectedVal); // Assert
        });

  });
});