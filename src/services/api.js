import { API } from 'aws-amplify';

export const generateLearningPath = async (formData) => {
  try {
    const response = await API.post('learningPathAPI', '/generate', {
      body: formData
    });
    return response;
  } catch (error) {
    console.error('API Error:', error);
    // Mock response for development
    return {
      topic: formData.topic,
      level: formData.level,
      timeframe: formData.timeframe,
      steps: [
        {
          title: "Foundation",
          description: `Learn the basics of ${formData.topic}`,
          resources: ["Online course", "Documentation", "Practice exercises"]
        },
        {
          title: "Intermediate Concepts",
          description: `Dive deeper into ${formData.topic}`,
          resources: ["Advanced tutorials", "Projects", "Community forums"]
        },
        {
          title: "Advanced Practice",
          description: `Master ${formData.topic} through real projects`,
          resources: ["Build portfolio projects", "Contribute to open source", "Mentorship"]
        }
      ]
    };
  }
};

export const saveLearningPath = async (pathData) => {
  try {
    const response = await API.post('learningPathAPI', '/save', {
      body: pathData
    });
    return response;
  } catch (error) {
    console.error('Save Error:', error);
    // Mock success for development
    return { success: true };
  }
};