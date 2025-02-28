const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title : {type: String, required: true,default: null ,description: 'Task title'},
    description : {type: String, required: false,default: null, description: 'Task description'},
    completed: {type: Boolean, default: false, description: 'Is the task completed?'},
    createdAt: {type: Date, default: Date.now, description: 'Task creation date'},

});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;