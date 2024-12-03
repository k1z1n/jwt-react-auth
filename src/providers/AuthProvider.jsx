import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import authService from "../services/authService";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Добавляем состояние загрузки
    const navigate = useNavigate();

    const checkTokensAndAuthenticate = async () => {
        try {
            const response = await authService.checkCookies();

            const hasAccessToken = !!response.access_token;
            const hasRefreshToken = !!response.refresh_token;

            if (!hasAccessToken && !hasRefreshToken) {
                console.log("Нет токенов. Авторизация не выполняется.");
                setUser(null);
                setLoading(false); // Завершаем загрузку
                return;
            }

            if (hasAccessToken) {
                console.log("Проверка токена доступа...");
                try {
                    const currentUser = await authService.getCurrentUser();
                    setUser(currentUser);
                    console.log("Пользователь успешно аутентифицирован:", currentUser);
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        console.log("Токен доступа истёк. Попытка обновления токенов...");
                    } else {
                        console.error("Ошибка проверки токена доступа:", error);
                        setUser(null);
                    }
                }
            } else if (hasRefreshToken) {
                try {
                    await authService.refreshToken();
                    const currentUser = await authService.getCurrentUser();
                    setUser(currentUser);
                    console.log("Токены обновлены, пользователь аутентифицирован:", currentUser);
                } catch (error) {
                    console.error("Ошибка обновления токенов:", error);
                    setUser(null);
                }
            } else {
                console.log("Оба токена истекли.");
                setUser(null);
            }
        } catch (error) {
            console.error("Ошибка при проверке токенов:", error);
            setUser(null);
        } finally {
            setLoading(false); // Завершаем загрузку
        }
    };

    useEffect(() => {
        checkTokensAndAuthenticate();
    }, []);

    const login = async (credentials) => {
        try {
            const userData = await authService.login(credentials);
            setUser(userData);
            console.log("Данные пользователя после логина:", userData);

            const userRole = userData.role;

            if (userRole === "admin") {
                navigate("/admin/profileAdminMain");
            } else if (userRole === "teacher") {
                navigate("/teacher/profileTeacherMain");
            } else {
                navigate("/student/profileStudentMain");
            }
        } catch (error) {
            console.error("Ошибка входа:", error);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const registeredUser = await authService.register(userData);
            setUser(registeredUser);
            console.log("Данные пользователя после регистрации:", registeredUser);

            const userRole = userData.role;

            if (userRole === "admin") {
                navigate("/admin/profileAdminMain");
            } else if (userRole === "teacher") {
                navigate("/teacher/profileTeacherMain");
            } else {
                navigate("/student/profileStudentMain");
            }
        } catch (error) {
            console.error("Ошибка регистрации:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            navigate("/authenticationTeacher");
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, navigate }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;