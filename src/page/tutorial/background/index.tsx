import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'

import Canvas from '../../../canvas'
import background from './background.jpg'

ReactDOM.render(<Canvas init={init}/>, document.getElementById('root'));


function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    scene.createAtlas({
        name: "background",
        image: background
    })
    new FlatLand.Painter.Background("background", scene, {
        atlasName: "background"
    })
    scene.start()
}
