import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Tutorials</h1>
            <ul>
                <li><a href="tutorial/clear.html">Hello world!</a></li>
                <li><a href="tutorial/background.html">Scalable background</a></li>
                <li><a href="tutorial/sprites-1.html">Sprites</a></li>
                <li><a href="tutorial/sprites-2.html">Quads</a></li>
                <li><a href="tutorial/voronoi.html">Voronoi</a></li>
            </ul>
            <h1>Articles</h1>
            <ul>
                <li><a href="article/voronoi.html">Voronoi</a></li>
            </ul>
    </div>
    );
}

export default App;
