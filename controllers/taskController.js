const Task = require('../models/Todo');

const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message: 'There was an error while fetching tasks'});
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({message: 'Task not found'});

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: 'There was an error while fetching tasks',error});
    }
};

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({title, description});

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({message: 'There was an error while creating task', error});
    }
};

const updateTask = async (req, res) => {
    try {
        const {title, description, completed} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id,
            {title, description, completed},
            {new: true}
        );


        if (!updatedTask) return res.status(404).json({message: 'Task not found'});

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({message: 'There was an error while updating task', error});
    }

};

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({message: 'Task not found'});

        res.status(200).json(deletedTask);
        ({message: 'Task deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'There was an error while deleting task', error});
    }
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
