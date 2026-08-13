const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");
const countDisplay = document.getElementById("count");

let totalTasks = 0;

function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please write something first!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;
    todoList.appendChild(li);

    // Update count
    totalTasks++;
    countDisplay.textContent = `Total: ${totalTasks}`;

    // Clear input field
    todoInput.value = "";
}

// Event Listeners
addBtn.addEventListener("click", addTask);

// Add task on pressing 'Enter' key
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});