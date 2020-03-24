import React from 'react'
import './App.css'
import BackgroundLogo from './logo/background.jpg'
import VoronoiLogo from './logo/voronoi.jpg'

const App: React.FC = () => {
    return (
        <div className="App">
        <Box page="background" title="Background" image={BackgroundLogo}/>
        <Box page="article/voronoi" title="Voronoi" image={VoronoiLogo}/>
    </div>
    )
}

function Box(props: { page: string, title: string, image?: string, description?: string }) {
    const { page, title, image, description } = props
    return <button className="box"
            style={{backgroundImage: `url(${image})`}}
            onClick={() => window.location.href = `${page}.html`}>
        <header>{title}</header>
        {
            description &&
            <footer>{description}</footer>
        }
    </button>
}

export default App;
