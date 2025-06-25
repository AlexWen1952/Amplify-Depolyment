import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App';

// Configure Amplify (will be auto-generated after amplify init)
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);