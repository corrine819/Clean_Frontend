
import React, { useState } from 'react';

const WorkoutGenerator = () => {
  const [goal, setGoal] = useState('');
  const [energyLevel, setEnergyLevel] = useState(5);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [equipment, setEquipment] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [injuries, setInjuries] = useState('');
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGeneratePlan = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPlan('Sample multi-day workout plan based on your inputs.');
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Workout Generator</h2>
      <div>
        <label>Goal: </label>
        <input value={goal} onChange={(e) => setGoal(e.target.value)} />
      </div>
      <div>
        <label>Energy Level (1-10): </label>
        <input type="number" value={energyLevel} onChange={(e) => setEnergyLevel(e.target.value)} min="1" max="10" />
      </div>
      <div>
        <label>Days per Week: </label>
        <input type="number" value={daysPerWeek} onChange={(e) => setDaysPerWeek(e.target.value)} />
      </div>
      <div>
        <label>Equipment: </label>
        <input value={equipment} onChange={(e) => setEquipment(e.target.value)} />
      </div>
      <div>
        <label>Fitness Level: </label>
        <input value={fitnessLevel} onChange={(e) => setFitnessLevel(e.target.value)} />
      </div>
      <div>
        <label>Injuries: </label>
        <input value={injuries} onChange={(e) => setInjuries(e.target.value)} />
      </div>
      <button onClick={handleGeneratePlan} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Plan'}
      </button>
      {plan && <div style={{ marginTop: '20px' }}><h3>Your Plan:</h3><p>{plan}</p></div>}
    </div>
  );
};

export default WorkoutGenerator;
