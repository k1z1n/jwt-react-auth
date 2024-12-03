import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user, loading, logout } = useAuth();

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!user) {
        console.log('хуй тебе')
        return <Navigate to="/login" replace />;
    }

    // if (requiredRole && user.role !== requiredRole) {
    //     console.log('Роль пользователя не соответствует требуемой. Выход из системы...');
    //     logout();
    //     return <Navigate to="/login" replace />;
    // }

    if (user.status === 'blocked') {
        logout();
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
