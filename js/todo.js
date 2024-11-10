let tasks = {
    "1": { text: "read the book (at least 5 pages)", done: false },
    "2": { text: "buy dog food", done: false },
    "3": { text: "call my parents", done: false },
    "4": { text: "clean my working place", done: false },
    "5": { text: "kill Dill", done: false }
};

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    } else {
        tasks = {};
    }
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//renderTasks();
function renderTasks() {
    const taskList = document.getElementById("task-list");
    const summary = document.getElementById("summary");
    taskList.innerHTML = "";
    let doneCount = 0;

    // Render each task
    Object.keys(tasks).forEach(taskId => {
        const task = tasks[taskId];
        const taskItem = document.createElement("div");
        taskItem.className = "list-item font-20";

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => toggleDone(taskId));
        taskItem.appendChild(checkbox);

        // Task text
        const taskText = document.createElement("span");
        taskText.className = "task-text" + (task.done ? " done" : "");
        taskText.innerText = task.text;
        taskText.addEventListener("click", () => toggleDone(taskId));
        taskItem.appendChild(taskText);

        // Buttons (Edit and Delete)
        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "task-buttons";

        // Edit button
        const editButton = document.createElement("button");
        editButton.className = "edit-btn ghost-btn font-20";
        editButton.innerHTML = `&#9998;`;
        editButton.addEventListener("click", () => editTask(taskId));
        buttonsDiv.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn ghost-btn";
        deleteButton.innerHTML = `&#10006;`;
        deleteButton.addEventListener("click", () => deleteTask(taskId));
        buttonsDiv.appendChild(deleteButton);

        taskItem.appendChild(buttonsDiv);

        if (task.done) doneCount++;
        taskList.appendChild(taskItem);
    });

    // Update summary text
    const totalTasks = Object.keys(tasks).length;
    summary.innerText = `Tasks done: ${doneCount} of ${totalTasks}`;

    // Calculate the done task percentage
    const completionPercentage = (doneCount / totalTasks) * 100;
    summary.style.background = `linear-gradient(to right, #97e44a ${completionPercentage}%, white ${completionPercentage}%)`;
}


document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    const newTaskInput = document.getElementById("taskInput");
    const newText = newTaskInput.value.trim();
    if (newText) {
        const newId = String(Date.now());
        tasks[newId] = { text: newText, done: false };
        newTaskInput.value = "";
        saveTasks();
        renderTasks();
    }
}

function toggleDone(taskId) {
    if (tasks[taskId]) {
        tasks[taskId].done = !tasks[taskId].done;
        saveTasks();
        renderTasks();
    }
}

//  edit a task
function editTask(taskId) {
    if (tasks[taskId]) {
        const newText = prompt("Edit task:", tasks[taskId].text);
        if (newText) {
            tasks[taskId].text = newText.trim();
            saveTasks();
            renderTasks();
        }
    }
}

//  delete a task
function deleteTask(taskId) {
    delete tasks[taskId];
    saveTasks();
    renderTasks();
}

// remove completed tasks
function removeCompletedTasks() {
    Object.keys(tasks).forEach(taskId => {
        if (tasks[taskId].done) {
            delete tasks[taskId];
        }
    });
    saveTasks();
    renderTasks();

    if (Object.keys(tasks).length === 0) {
        const summary = document.getElementById("summary");
        summary.style.background = "white";
    }
}

// done
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    renderTasks();
});
