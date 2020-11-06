const express=require('express');
const Tasks=[];
const CreateTaskController=(req,res)=>{
const newTask={
    id:Tasks.length+1,
    TaskName:req.body.TaskName,
    TaskPriority:req.body.TaskPriority
}
Tasks.push(newTask)  
return res.status(201).send(Tasks)
}
const getTasks=(req,res)=>{
    return res.status(200).send(Tasks);
}
const UpdateTaskController=(req,res)=>{
 const findTask=Tasks.find(task=>task.id===parseInt(req.params.id));
 if(!findTask) return res.status(404).send('task not found');
    findTask.TaskName=req.body.TaskName;
    findTask.TaskPriority=req.body.TaskPriority;
   res.status(200).send(findTask)
}
module.exports={CreateTaskController,getTasks,UpdateTaskController}










