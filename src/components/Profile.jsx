import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function Profile() {
    const { user, loading, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log('User in Profile:', user);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!user) {
        navigate('/login');
        return null; // Возвращаем null, чтобы ничего не рендерить
    }

    const handleOut = () =>{
        logout();
    }

    return (
        <div>
            <h2>Профиль пользователя</h2>
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* <p><strong>Роль:</strong> {user.role}</p> */}
            {/* Добавьте другие поля по необходимости */}
            <button onClick={handleOut}>выйти</button>
        </div>
    );
}

export default Profile;
