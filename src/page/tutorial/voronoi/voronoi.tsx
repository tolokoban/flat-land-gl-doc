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
    const seeds: number[] = []
    const colors: number[] = []

    for (let count = 0; count < 10; count++) {
        seeds.push(rnd(), rnd(), 1)
        colors.push(rnd(), rnd(), rnd())
    }
    const voronoiPainter = new FlatLandGL.Painter.Voronoi({
        seeds, colors, border: 0.05, light: 1
    })
    scene.use([voronoiPainter])
    scene.start()
}


function rnd() {
    return Math.random()
}
