import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'

import Canvas from '../../../canvas'

ReactDOM.render(<Canvas init={init}/>, document.getElementById('root'));


function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    new FlatLand.Painter.Clear("background", scene)
    scene.start()
}
