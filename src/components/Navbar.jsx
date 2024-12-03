import React from "react";

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav>
            <div
                className="bx bx-menu"
                onClick={toggleSidebar} // Вызываем функцию для управления Sidebar
            >
                Привет
            </div>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button className="search-btn" type="submit">
                        <i className="bx bx-search"></i>
                    </button>
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden />
            <label htmlFor="theme-toggle" className="theme-toggle"></label>
            <a href="#" className="notif">
                <i className="bx bx-bell"></i>
                <span className="count">12</span>
            </a>
            <a href="#" className="profile"></a>
        </nav>
    );
};

export default Navbar;
