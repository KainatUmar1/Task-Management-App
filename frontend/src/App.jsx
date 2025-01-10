import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {setIsLoggedIn(true);};
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/"
                        element={isLoggedIn ? (<Navigate to="/dashboard" />)
                            : (<Login onLogin={handleLogin} />)}/>
                    <Route path="/dashboard"
                        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}/>
                </Routes>
            </div>
        </Router>
);};

export default App;