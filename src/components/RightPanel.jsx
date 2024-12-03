// RightPanel.jsx
import React from 'react';

const RightPanel = () => {
    return (
        <div className="w-64 h-screen bg-gray-50 border-l p-6">
            <h2 className="text-lg font-bold mb-4">Statistics</h2>
            <ul className="space-y-4">
                <StatItem label="Courses Completed" value="12" />
                <StatItem label="Total Points" value="250" />
                <StatItem label="Tasks Finished" value="75" />
            </ul>
        </div>
    );
};

const StatItem = ({ label, value }) => (
    <li className="flex justify-between">
        <span>{label}</span>
        <span className="font-semibold">{value}</span>
    </li>
);

export default RightPanel;
