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
        <h1>Vanilla Javascipt examples</h1>
        <a href="examples/index.html">Look at this page</a>.
    </div>
  );
}

export default App;
