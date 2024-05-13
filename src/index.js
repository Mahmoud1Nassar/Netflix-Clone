import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Make sure the path to App is correct

// Get the div element with the ID 'root' from your index.html file
const container = document.getElementById('root');

// Create a root instance linked to the container
const root = createRoot(container);

// Render the App component into the root
root.render(<App />);
