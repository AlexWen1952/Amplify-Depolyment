import React from 'react';
import { saveLearningPath } from '../services/api';

function LearningPathResult({ path, onReset }) {
  const handleSave = async () => {
    try {
      await saveLearningPath(path);
      alert('Learning path saved successfully!');
    } catch (error) {
      console.error('Error saving path:', error);
    }
  };

  return (
    <div className="learning-path">
      <h2>Your Learning Path: {path.topic}</h2>
      <p><strong>Level:</strong> {path.level}</p>
      <p><strong>Duration:</strong> {path.timeframe}</p>
      
      <div className="steps">
        <h3>Learning Steps:</h3>
        {path.steps?.map((step, index) => (
          <div key={index} className="step">
            <h4>Week {index + 1}: {step.title}</h4>
            <p>{step.description}</p>
            <ul>
              {step.resources?.map((resource, i) => (
                <li key={i}>{resource}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSave} style={{ marginRight: '10px' }}>
          Save Path
        </button>
        <button onClick={onReset}>
          Generate New Path
        </button>
      </div>
    </div>
  );
}

export default LearningPathResult;