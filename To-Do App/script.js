const inputBox = document.getElementById("enter-task");
const addButton = document.getElementById("submit-task");
const taskList = document.getElementById("tasks");


addButton.addEventListener("click",buttonClicked);

function buttonClicked(){
    const task=inputBox.value;
    if(task.trim()===""){
        return;
    }
const list=document.createElement("li");
const span=document.createElement("span");
span.textContent=task;

const editButton=document.createElement("button");
editButton.textContent="Edit";

const deleteButton=document.createElement("button");
deleteButton.textContent="delete";

const completed=document.createElement("button");
completed.textContent="Complete";





editButton.addEventListener("click",function(){
    const newTask=prompt("enter your text",span.textContent);
    if(newTask.trim()===""){
        return;
    }else{
        span.textContent=newTask;
    }
})
deleteButton.addEventListener("click",function(){
    taskList.removeChild(list);
})

completed.addEventListener("click",function(){
    span.style.textDecoration="line-through";

    completed.textContent="completed";
    
    completed.disabled = true;
})
list.appendChild(span);
list.appendChild(editButton);
list.appendChild(deleteButton);
list.appendChild(completed);


taskList.appendChild(list);


inputBox.value="";

}