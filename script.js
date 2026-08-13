const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");
const countDisplay = document.getElementById("count");

let totalTasks = 0;

function addTask() {
    const taskText = todoInput.value.trim();

    // Input validation
    if (taskText === "") {
        alert("Please write something first!");
        return;
    }

    // Create list item element
    const li = document.createElement("li");
    li.textContent = taskText + " ";

    // Create delete button element
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";

    // Handle delete action and update total counter
    deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li);
        totalTasks--;
        countDisplay.textContent = `Total: ${totalTasks}`;
    });

    // Append delete button to list item and list item to task list
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Update counter and reset input field
    totalTasks++;
    countDisplay.textContent = `Total: ${totalTasks}`;
    todoInput.value = "";
}

// Event Listeners
addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});