import React from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote'; // Ensure correct case and name

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Quote Generator</h1>
        <p>Create amazing quotes in seconds using the power of Artificial Intelligence. Try it now!</p>
        <GenerateQuote /> {/* Use the GenerateQuote component */}
      </header>
    </div>
  );
}

export default App;
