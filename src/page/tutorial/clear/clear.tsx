import React from 'react'
import ReactDOM from 'react-dom'
import FlatLandGL from 'flat-land-gl'
import codeContent from './clear-code.md'

import Page from '../../../view/page'

ReactDOM.render(
  <Page
    title="Monochromatic background"
    codeContent={codeContent}
    onLoad={init}/>,
  document.getElementById('root')
)

function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLandGL.Scene(canvas)
    const clearPainter = new FlatLandGL.Painter.Clear({ color: "#d72" })
    scene.use([clearPainter])
    scene.start()
}
