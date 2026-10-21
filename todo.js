const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function render() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        if (task.done) {
            li.classList.add("done");
        }

        const span = document.createElement("span");
        span.textContent = task.text;
        span.addEventListener("click", function () {
            tasks[index].done = !tasks[index].done;
            render();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            render();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const value = taskInput.value.trim();
    if (value === "") {
        alert("Please enter a task");
        return;
    }
    tasks.push({ text: value, done: false });
    taskInput.value = "";
    render();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});