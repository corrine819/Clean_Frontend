import React from 'react';
import WorkoutGenerator from './WorkoutGenerator';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="border p-4 rounded-xl shadow">Quadrant 1: Workout Plan</div>
      <div className="border p-4 rounded-xl shadow">Quadrant 2: Nutrition</div>
      <div className="border p-4 rounded-xl shadow">Quadrant 3: Progress</div>
      <div className="border p-4 rounded-xl shadow">Quadrant 4: Settings</div>
    </div>
  );
};

export default Dashboard;