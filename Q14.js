let tasks = ["Assignement", "Evalution", "csbt", "Masai", "Scrum"];
let updatedTask = [];
for (let i = 1; i < tasks.length; i++) { 
    updatedTask[i - 1] = tasks[i];
}
let finalTask = ["Coding", "DSA"];
for (let i = 0; i < updatedTask.length; i++) {
    finalTask.push(updatedTask[i]); 
}
finalTask[finalTask.length - 1] = "NewTask";
console.log(finalTask);
