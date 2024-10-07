document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      // Get the new task from the input 
      const newTask = document.getElementById('new-task-description').value;

      // Create a new list item for the task
      const listItem = document.createElement('li');
      listItem.textContent = newTask;
       
      // delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        listItem.remove();
      });
      taskList.appendChild(listItem);
      listItem.appendChild(deleteButton);
 
      form.reset();
  });
});
