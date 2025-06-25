import React, { useState } from 'react';
import { generateLearningPath } from '../services/api';

function LearningPathForm({ onPathGenerated }) {
  const [formData, setFormData] = useState({
    topic: '',
    level: 'beginner',
    timeframe: '1-month',
    goals: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const path = await generateLearningPath(formData);
      onPathGenerated(path);
    } catch (error) {
      console.error('Error generating path:', error);
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Generate Your Learning Path</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Topic/Subject:</label>
          <input
            type="text"
            value={formData.topic}
            onChange={(e) => setFormData({...formData, topic: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Current Level:</label>
          <select
            value={formData.level}
            onChange={(e) => setFormData({...formData, level: e.target.value})}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Timeframe:</label>
          <select
            value={formData.timeframe}
            onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
          >
            <option value="2-weeks">2 Weeks</option>
            <option value="1-month">1 Month</option>
            <option value="3-months">3 Months</option>
            <option value="6-months">6 Months</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Learning Goals:</label>
          <textarea
            value={formData.goals}
            onChange={(e) => setFormData({...formData, goals: e.target.value})}
            rows="3"
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Learning Path'}
        </button>
      </form>
    </div>
  );
}

export default LearningPathForm;