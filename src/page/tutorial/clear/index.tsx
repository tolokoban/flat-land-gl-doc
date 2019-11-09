import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import Description from '../../../view/description'
import description from './clear.md'

import Canvas from '../../../canvas'

ReactDOM.render(<div>
    <Canvas init={init}/>
    <Description content={description}/>
</div>, document.getElementById('root'));


function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    const painter =
        new FlatLand.Painter.Clear("painter", scene)
    painter.color = "#d72"
    scene.start()
}
