import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import Page from '../../../view/page'
import preContent from './background-pre.md'
import codeContent from './background-code.md'
import Background from './background.jpg'
import "./background.css"


ReactDOM.render(
  <Page
    title="Monochromatic background"
    preContent={preContent}
    codeContent={codeContent}
    onLoad={init}/>,
  document.getElementById('root')
)


function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    const atlas = scene.createAtlas({ image: Background })
    const background = new FlatLand.Painter.Background({
        atlas, align: "BR"
    })
    scene.use([background])
    scene.start()
}
