const express=require('express');
const { CreateTaskController, getTasks, UpdateTaskController } = require('../Controllers/index.js');
const router=express.Router();
router.post('/api/task',CreateTaskController)
router.get('/api/task',getTasks)
router.put('/api/task/:id',UpdateTaskController)
module.exports=router

