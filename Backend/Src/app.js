// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes/user.router');
// Example if your file is named todo.routes.js
const todoRouter = require('../routes/todo.router');


const app = express();

app.use(bodyParser.json());
app.use('/api', userRouter); // Base route for user API
app.use('/api/todo', todoRouter); // Base route for todo API

module.exports = app;
