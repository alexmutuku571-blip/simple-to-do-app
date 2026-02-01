function addTask() {
    const input=document.getElementById("taskInput");
    const task= input.value;

    if (task === "") return;

    const li= document.createElement("li");
    li.textContent = task;

    document.getElementById("tasklist").appendChild(li);
    input.value = "";
    
}
