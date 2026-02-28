function addtask() {
    //selectors
    let taskinput = document.querySelector("#inputTask");
    let addbtn = document.querySelector("#addBtn");
    let tasklist = document.querySelector("#task-list");
    const tasktext = taskinput.value.trim();
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const del = document.createElement("button");

    if (tasktext == "") {
        alert("Please enter a task");
        return;
    }

    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.onclick = () => {
        li.classList.toggle("completed");
    }

    span.textContent = tasktext;

    del.textContent = "Delete";
    del.className = "delete-btn";
    del.onclick = () => {
        li.remove();
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);

    tasklist.appendChild(li);

}

