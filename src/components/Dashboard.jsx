import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";

const Dashboard = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Общее состояние сворачивания

    return (
        <div className="dashboard">
            {/* Передаем общее состояние и функцию управления */}
            <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
            <div className={`content ${isSidebarCollapsed ? "collapsed" : ""}`}>
                <Navbar toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
                <Content />
            </div>
        </div>
    );
};

export default Dashboard;
