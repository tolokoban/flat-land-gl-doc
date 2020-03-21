import React from 'react'
import ReactDOM from 'react-dom'
import Article from '../../view/article'
import MD from '../../view/md'
import Clear from './clear'
import Image from './image'

ReactDOM.render(
    <Article title="Backgrounds">
        <MD>
            Every pixel of a background is at `z=-1`.
            That's why it is often a good practice to paint the background after everything else.
            That will reduce the number of fragments to write.
        </MD>
        <hr/>
        <h1>Monochomatic Background</h1>
        <MD>
            Put a unique color in the background.
        </MD>
        <Clear />
        <hr/>
        <h1>Image Background</h1>
        <Image />
    </Article>,
    document.getElementById('root')
)
