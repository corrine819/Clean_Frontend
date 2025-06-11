import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const WorkoutGenerator = () => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGeneratePlan = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/generate_multi_day_plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal: 'general fitness',
          energy_level: 5,
          days_per_week: 3,
          equipment: 'bodyweight',
          fitness_level: 'beginner',
          injuries: ''
        })
      });
      if (!response.ok) {
        throw new Error('Failed to generate plan');
      }
      const data = await response.json();
      setPlan(data.plan);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleGeneratePlan}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Plan'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {plan && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Generated Plan:</h3>
          {plan.days.map((day) => (
            <div key={day.day} className="mb-2 p-2 border rounded">
              <p><strong>Day {day.day}</strong></p>
              <p>Workout: {day.workout}</p>
              <p>Nutrition: {day.nutrition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutGenerator;