import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onSubmit, existingTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    // Update form fields when existingTask changes
    useEffect(() => {
        if (existingTask) {
            setName(existingTask.name);
            setDescription(existingTask.description);
            setDueDate(existingTask.dueDate);
        } else {
            setName('');
            setDescription('');
            setDueDate('');
        }
    }, [existingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, dueDate });
        // Clear form fields after submitting
        if (!existingTask) {
            setName('');
            setDescription('');
            setDueDate('');
        }
    };

    return (
        <div className="task-form">
            <h2>{existingTask ? 'Edit Task' : 'Create Task'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Task Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter task name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{existingTask ? 'Update Task' : 'Create Task'}</button>
            </form>
        </div>
    );
};

export default TaskForm;
