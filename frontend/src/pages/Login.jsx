import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import '../styles/Login.css'

const Login = ({ onLogin }) => {
    return (
        <div className="login-page">
            <h1>Task Management Application</h1>
            <LoginForm onLogin={onLogin} />
        </div>
    );
};

export default Login;
