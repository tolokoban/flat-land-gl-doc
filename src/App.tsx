import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <h1>Tutorials</h1>
        <ul>
            <li><a href="tuto-clear.html">Hello world!</a></li>
            <li><a href="tuto-background.html">Scalable background</a></li>
            <li><a href="tuto-sprites-1.html">Sprites (1)</a></li>
        </ul>
    </div>
  );
}

export default App;
