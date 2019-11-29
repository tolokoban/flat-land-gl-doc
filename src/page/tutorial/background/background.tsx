import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'

import Canvas from '../../../canvas'
import Description from '../../../view/description'
import description from './background.md'
import Background from './background.jpg'
import "./background.css"


export default {
    start() {
        ReactDOM.render(<div>
            <Canvas init={init}/>
            <Description content={description}/>
        </div>, document.getElementById('root'));


        function init(canvas: HTMLCanvasElement) {
            const scene = new FlatLand.Scene(canvas)
            const atlas = scene.createAtlas({ image: Background })
            const background = new FlatLand.Painter.Background({
                atlas, align: "BR"
            })
            scene.use([background])
            scene.start()
        }
    }
}
