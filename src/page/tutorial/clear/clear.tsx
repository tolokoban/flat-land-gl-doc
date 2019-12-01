import React from 'react'
import ReactDOM from 'react-dom'
import FlatLandGL from 'flat-land-gl'
import Description from '../../../view/description'
import description from './clear.md'

import Canvas from '../../../canvas'

ReactDOM.render(<div>
    <Canvas init={init}/>
    <Description content={description}/>
</div>, document.getElementById('root'));


function init(canvas: HTMLCanvasElement) {
    //console.info("window.FlatLand=", window.FlatLand);
    console.info("FlatLandGL=", FlatLandGL);
    console.info("FlatLandGL.Scene=", FlatLandGL.Scene);
    const scene = new FlatLandGL.Scene(canvas)
    const clearPainter = new FlatLandGL.Painter.Clear({ color: "#d72" })
    scene.use([clearPainter])
    scene.start()
}
