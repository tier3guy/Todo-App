let newTask = document.getElementById("newTask");
let addbtn = document.getElementById("addbtn");
let taskes = document.getElementById("taskes");

addbtn.onclick = function() {
    let enteredTask = newTask.value;
    if(enteredTask == ""){
        alert("Enter Valid Task");
    }else{
        createTask(enteredTask);
    }
}

function createTask(enteredTask){

    var para = document.createElement("P");
    var task = document.createTextNode(enteredTask);
    para.appendChild(task);
    taskes.appendChild(para);
    newTask.value = "";
    para.addEventListener("click",()=>{
        para.style.textDecoration = "line-through";
        para.addEventListener("click",()=>{
            taskes.removeChild(para);
        })
    })
}


