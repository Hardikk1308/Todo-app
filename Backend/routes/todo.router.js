const express = require('express');
const router = express.Router();
const todoController = require('../Controller/todo.controllers'); // Make sure the correct path

router.post('/todos', todoController.createTodo); 
router.post('/getalltodos', todoController.getalltodos); 
router.delete('/deletetodo', todoController.deleteTodo);



module.exports = router;
