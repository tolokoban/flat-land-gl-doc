import React from 'react'
import ReactDOM from 'react-dom'
import Article from '../../view/article'
import MD from '../../view/md'
import Clear from './clear'
import Image from './image'
import Cube from './cube'

ReactDOM.render(
    <Article title="Backgrounds">
        <div>
            <h1>Clear Painter</h1>
            <MD>
                Put a unique color in the background.
                This painter will erase everything drawn by any painter before it.
            </MD>
            <Clear />
        </div>
        <div>
            <h1>Background Painter</h1>
            <MD>
                Every pixel of a background is at `z = 1.0`.
                That's why it is often a good practice to paint the background after everything else.
                That will reduce the number of fragments to write.
            </MD>
            <Image />
        </div>
        <div>
            <h1>CubeMap Painter</h1>
            <MD>
                You can simulate a far environment with a texture based on 6 squared images.
            </MD>
            <Cube />
        </div>
    </Article>,
    document.getElementById('root')
)
