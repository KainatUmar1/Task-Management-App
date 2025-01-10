import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const updateTask = (updatedTask) => {
        setTasks(
            tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
        setEditingTask(null);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const editTask = (id) => {
        const task = tasks.find((task) => task.id === id);
        setEditingTask(task);
    };

    const addNewTask = () => {
        setEditingTask(null); // Reset editingTask to focus on creating a new task
    };

    return (
        <div className="dashboard">
            <h1>Welcome to your Dashboard</h1>
            <div className="task-section">
                <TaskForm
                    onSubmit={editingTask ? updateTask : addTask}
                    existingTask={editingTask}
                />
                <TaskList
                    tasks={tasks}
                    onEdit={editTask}
                    onDelete={deleteTask}
                    onAddTask={addNewTask} // Pass the function to TaskList
                />
            </div>
        </div>
    );
};

export default Dashboard;
