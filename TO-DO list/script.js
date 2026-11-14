function addTask() {
  const newTask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newTask);
  //adding list to addTask by using id=inputTak
  newTask.textContent = document.getElementById("inputTask").value;
  document.getElementById("inputTask").value = ""; //when you added list, the text area must get automatically clear
  deleteTask(newTask);
}

function deleteTask(newTask) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  newTask.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    newTask.remove();
  };
}
