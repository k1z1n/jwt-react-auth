import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from "./providers/AuthProvider.jsx";

import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import Login from './components/Login';
import Profile from "./components/Profile.jsx";
import Dashboard from "./components/Dashboard.jsx";
// Импортируйте остальные компоненты

const App = () => (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route
                    path="/profile"
                    element={
                        // <StudentRoute>
                        <Profile/>
                        // </StudentRoute>
                    }
                />
                <Route path={'/akk'} element={<Dashboard/>}></Route>
            </Routes>
        </AuthProvider>
    </Router>
);

export default App;
