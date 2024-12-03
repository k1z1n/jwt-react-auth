// Content.jsx
import React from 'react';

const Content = () => {
    return (
        <main className="">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Пример карточек */}
                <Card title="Course Progress" value="75%" />
                <Card title="Tasks Completed" value="50/100" />
                <Card title="Upcoming Deadlines" value="3 tasks" />
            </div>
        </main>
    );
};

const Card = ({ title, value }) => (
    <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl mt-2">{value}</p>
    </div>
);

export default Content;
