// Step 1: Select the necessary elements from the DOM
const taskInput = document.getElementById('taskInput'); // Input field for new tasks
const addTaskBtn = document.getElementById('addTaskBtn'); // Button to add a new task
const taskList = document.getElementById('taskList'); // UL element to display tasks

// Step 2: Create a function to add a new task
function addTask() {
    // Check if the input field is empty
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    // Step 3: Create a new list item (li) and add the task text to it
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    // Step 4: Create a delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Step 5: Add an event listener to the delete button to remove the task
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(newTask);
    });

    // Step 6: Append the delete button to the new task (li)
    newTask.appendChild(deleteBtn);

    // Step 7: Append the new task (li) to the task list (ul)
    taskList.appendChild(newTask);

    // Step 8: Clear the input field after adding the task
    taskInput.value = '';
}

// Step 9: Add an event listener to the "Add Task" button to call the addTask function
addTaskBtn.addEventListener('click', addTask);

// Step 10: (Optional) Allow users to press "Enter" to add a task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});