import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'

import Canvas from '../../../canvas'
import Description from '../../../view/description'
import description from './background.md'
import background from './background.jpg'
import "./background.css"


ReactDOM.render(<div>
    <Canvas init={init}/>
    <Description content={description}/>
</div>, document.getElementById('root'));


function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    scene.createAtlas({
        name: "background",
        image: background
    })
    new FlatLand.Painter.Background({
        scene,
        atlas: "background",
        align: "BR"
    })
    scene.start()
}
