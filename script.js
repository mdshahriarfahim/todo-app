const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");
const countDisplay = document.getElementById("count");
const clearAllBtn = document.getElementById("clearAllBtn");

let totalTasks = 0;

// Helper function to update total task count and button visibility
function updateCount() {
    countDisplay.textContent = `Total: ${totalTasks}`;
    
    // Toggle 'Clear All' button visibility based on task count
    if (totalTasks > 0) {
        clearAllBtn.style.display = "block";
    } else {
        clearAllBtn.style.display = "none";
    }
}

function addTask() {
    const taskText = todoInput.value.trim();

    // Input validation
    if (taskText === "") {
        alert("Please write something first!");
        return;
    }

    // Create list item element
    const li = document.createElement("li");
    
    // Task text container
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create delete button element
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Handle single item deletion
    deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li);
        totalTasks--;
        updateCount();
    });

    // Append text and delete button to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Increment count and reset input field
    totalTasks++;
    updateCount();
    todoInput.value = "";
}

// Clear all tasks logic
clearAllBtn.addEventListener("click", function () {
    todoList.innerHTML = "";
    totalTasks = 0;
    updateCount();
});

// Event Listeners
addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});