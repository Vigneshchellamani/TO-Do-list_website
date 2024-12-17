
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});

function showCompletedTasks() {
    var completedTasksSection = document.getElementById("CompletedTasks");

   
    if (!document.getElementById("completed-list")) {
        alert("No tasks completed yet.");
        return;
    }
    completedTasksSection.style.display =
        completedTasksSection.style.display === "none" ? "block" : "none";
}

function addTask() {
    var taskvalue = document.getElementById("input-box").value;
    var datevalue = document.getElementById("input-box1").value;
    var taskList = document.getElementById("tasklist");
    var completedTasksSection = document.getElementById("CompletedTasks");

    // Validate inputs
    if (taskvalue === "" || datevalue === "") {
        alert("Please fill in both the task and the date.");
        return;
    }

    let currentDate = new Date();
    let enteredDate = new Date(datevalue);

    if (enteredDate < currentDate) {
        alert("Please select a future date.");
        return;
    }

    if (!document.getElementById("task-list-header")) {
        var taskListHeader = document.createElement("h2");
        taskListHeader.innerText = "Task List";
        taskListHeader.id = "task-list-header";
        taskList.prepend(taskListHeader); 
    }

    // Create new task list item
    var listitems = document.createElement("li");
    listitems.innerText = `${taskvalue} (Due: ${datevalue})`;
    listitems.className = "list-dis";
    taskList.appendChild(listitems);

    // Add button container
    var buttoncontainer = document.createElement("div");
    buttoncontainer.className = "task-button";
    listitems.appendChild(buttoncontainer);

    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "deletebut";
    deleteButton.onclick = function () {
        taskList.removeChild(listitems);
    };
    buttoncontainer.appendChild(deleteButton);

    // Add complete button
    var completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.onclick = function () {
        if (!document.getElementById("completed-list")) {
            var completedListHeader = document.createElement("h2");
            completedListHeader.innerText = "Completed Tasks";
            completedListHeader.id = "completed-task-header";
            completedTasksSection.prepend(completedListHeader);

            var completedList = document.createElement("ul");
            completedList.id = "completed-list";
            completedTasksSection.appendChild(completedList);
        }

        var completedList = document.getElementById("completed-list");
        listitems.removeChild(buttoncontainer);
        completedList.appendChild(listitems);
    };
    buttoncontainer.appendChild(completeButton);
    document.getElementById("input-box").value = "";
    document.getElementById("input-box1").value = "";
   
}
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
