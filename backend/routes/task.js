const express = require('express');
const Task = require('../models/task');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all tasks for admin
router.get('/', authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.username });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create
router.post('/', authMiddleware, async (req, res) => {
    const { name, description, dueDate } = req.body;

    try {
        const newTask = new Task({
            name,
            description,
            dueDate,
            user: req.user.username,
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create task' });
    }
});

// Update
router.put('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { name, description, dueDate } = req.body;

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, user: req.user.username },
            { name, description, dueDate },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update task' });
    }
});

// Delete
router.delete('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findOneAndDelete({
            _id: id,
            user: req.user.username,
        });

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete task' });
    }
});

module.exports = router;
