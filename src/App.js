import React, { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import LearningPathForm from './components/LearningPathForm';
import LearningPathResult from './components/LearningPathResult';
import './App.css';

function App({ signOut, user }) {
  const [learningPath, setLearningPath] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>Learning Path Generator</h1>
        <div>
          <span>Hello {user.username}</span>
          <button onClick={signOut}>Sign out</button>
        </div>
      </header>
      <main>
        {!learningPath ? (
          <LearningPathForm onPathGenerated={setLearningPath} />
        ) : (
          <LearningPathResult path={learningPath} onReset={() => setLearningPath(null)} />
        )}
      </main>
    </div>
  );
}

export default withAuthenticator(App);