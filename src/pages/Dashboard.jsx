import React from 'react';
import WorkoutGenerator from './WorkoutGenerator';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 min-h-screen bg-gray-50">
      <div className="border p-4 rounded-xl shadow bg-white">
        <h2 className="text-xl font-bold mb-2">Workout Generator</h2>
        <WorkoutGenerator />
      </div>
      <div className="border p-4 rounded-xl shadow bg-white">
        <h2 className="text-xl font-bold mb-2">Nutrition</h2>
        <p>Nutrition content coming soon.</p>
      </div>
      <div className="border p-4 rounded-xl shadow bg-white">
        <h2 className="text-xl font-bold mb-2">Progress</h2>
        <p>Progress tracking coming soon.</p>
      </div>
      <div className="border p-4 rounded-xl shadow bg-white">
        <h2 className="text-xl font-bold mb-2">Settings</h2>
        <p>Settings options coming soon.</p>
      </div>
    </div>
  );
};

export default Dashboard;