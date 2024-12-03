import React, { useEffect, useState } from "react";
import {
    FiHome,
    FiShoppingCart,
    FiSettings,
    FiUser,
    FiLogOut,
    FiBarChart2,
    FiMessageSquare,
} from "react-icons/fi";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const [activeItem, setActiveItem] = useState("Analytics"); // Активный элемент

    const menuItems = [
        { label: "Dashboard", icon: <FiHome /> },
        { label: "Shop", icon: <FiShoppingCart /> },
        { label: "Analytics", icon: <FiBarChart2 /> },
        { label: "Tickets", icon: <FiMessageSquare /> },
        { label: "Users", icon: <FiUser /> },
        { label: "Settings", icon: <FiSettings /> },
        { label: "Logout", icon: <FiLogOut />, isLogout: true },
    ];

    // Обработчик для активного элемента
    const handleItemClick = (label) => {
        setActiveItem(label);
    };

    // Обработка изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsCollapsed(true); // Автоматически свернуть Sidebar
            } else {
                setIsCollapsed(false); // Развернуть Sidebar
            }
        };

        handleResize(); // Инициализация

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setIsCollapsed]);

    return (
        <div className={`sidebar ${isCollapsed ? "close" : ""}`}>
            <a href="#" className="logo">
                <i className="bx bx-code-alt"></i>
                {!isCollapsed && (
                    <div className="logo-name">
                        <span>Asmr</span>Prog
                    </div>
                )}
            </a>
            <ul className="side-menu">
                {menuItems.map((item) => (
                    <li
                        key={item.label}
                        className={activeItem === item.label ? "active" : ""}
                        onClick={() => handleItemClick(item.label)}
                    >
                        <a href="#">
                            <i className={`bx ${item.icon}`}>{item.icon}</i>
                            {!isCollapsed && <span>{item.label}</span>}
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#" className="logout">
                        <i className="bx bx-log-out-circle"></i>
                        {!isCollapsed && <span>Logout</span>}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
