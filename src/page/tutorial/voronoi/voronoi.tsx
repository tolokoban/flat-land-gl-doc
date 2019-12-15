import React from 'react'
import ReactDOM from 'react-dom'
import FlatLandGL from 'flat-land-gl'
import codeContent from './voronoi-code.md'

import Page from '../../../view/page'

ReactDOM.render(
  <Page
    title="Voronoi"
    codeContent={codeContent}
    onLoad={init}/>,
  document.getElementById('root')
)

function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLandGL.Scene(canvas)
    const voronoiPainter = new FlatLandGL.Painter.Voronoi()
    scene.use([voronoiPainter])
    scene.start()
}
