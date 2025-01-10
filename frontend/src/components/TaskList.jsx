import React from 'react';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onDelete, onEdit, onAddTask }) => {
    return (
        <div className="task-list">
            <h2>Your Tasks</h2>
            <button className="add-task-button" onClick={onAddTask}>
                Add Task
            </button>
            {tasks.length === 0 ? (
                <p>No tasks available. Add a task to get started!</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            <div className="task-details">
                                <h3>{task.name}</h3>
                                <p>{task.description}</p>
                                <small>Due: {task.dueDate}</small>
                            </div>
                            <div className="task-actions">
                                <button onClick={() => onEdit(task.id)}>Edit</button>
                                <button onClick={() => onDelete(task.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
