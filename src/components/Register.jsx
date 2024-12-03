import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Register() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const { register } = useAuth();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            navigate('/profile');
        } catch (err) {
            if (err.response && err.response.data) {
                setErrors(err.response.data);
            } else {
                setErrors({ general: 'Ошибка регистрации' });
            }
        }
    };

    return (
        <div>
            <h2>Регистрация</h2>
            {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password_confirmation"
                    value={userData.password_confirmation}
                    onChange={handleChange}
                    required
                />
                {/* Другие поля формы */}
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Register;
