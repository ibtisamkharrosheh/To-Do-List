let tasks = [
    { id: "1", text: "read the book (at least 5 pages)", done: false },
    { id: "2", text: "buy dog food", done: false },
    { id: "3", text: "call my parents", done: false },
    { id: "4", text: "clean my working place", done: false },
    { id: "5", text: "kill Dill", done: false }
];

document.getElementById("addTaskButton").addEventListener("click", addTask);
renderTasks();

function renderTasks() {
    const taskList = document.getElementById("task-list");
    const summary = document.getElementById("summary");
    taskList.innerHTML = "";
    let doneCount = 0;

    tasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.className = "list-item font-20";

        ////  Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => toggleDone(task.id));
        taskItem.appendChild(checkbox);

        // Task text
        const taskText = document.createElement("span");
        taskText.className = "task-text" + (task.done ? " done" : "");
        taskText.innerText = task.text;

        taskText.addEventListener("click", () => {
            toggleDone(task.id);
        });
        taskItem.appendChild(taskText);

        //////  buttons (Edit and Delete)
        const buttonsDiv = document.createElement("list-item");
        buttonsDiv.className = "task-buttons";

        // Edit button
        const editButton = document.createElement("button");
        editButton.className = "edit-btn ghost-btn font-20";
        editButton.innerHTML = `&#9998;`;  // Use innerHTML for icons
        editButton.addEventListener("click", () => editTask(task.id));
        buttonsDiv.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn ghost-btn";
        deleteButton.innerHTML = `&#10006;`;  // Using innerHTML to display the cross icon
        deleteButton.addEventListener("click", () => deleteTask(task.id));
        buttonsDiv.appendChild(deleteButton);

        taskItem.appendChild(buttonsDiv);

        if (task.done) doneCount++;
        taskList.appendChild(taskItem);
    });

    //  summary Update
    summary.innerText = `Tasks done: ${doneCount} of ${tasks.length}`;
}


function addTask() {
    const newTaskInput = document.getElementById("taskInput");
    const newText = newTaskInput.value.trim();
    if (newText) {
        tasks.push({ id: String(Date.now()), text: newText, done: false });
        newTaskInput.value = "";
        renderTasks();
    }
}

function toggleDone(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.done = !task.done;
        renderTasks();
    }
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        const newText = prompt("Edit task:", task.text);
        if (newText) {
            task.text = newText.trim();
            renderTasks();
        }
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

function removeCompletedTasks() {
    tasks = tasks.filter(task => !task.done);
    renderTasks();
}
