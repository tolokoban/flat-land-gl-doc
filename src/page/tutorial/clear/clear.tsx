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
    const red = clearPainter.red
    const green = clearPainter.green
    const blue = clearPainter.blue
    scene.onAnimation = (time: number) => {
      if (scene.pointer.down) {
        const alpha = Math.abs(Math.cos(time * 0.001))
        clearPainter.red = alpha * red
        clearPainter.green = alpha * green
        clearPainter.blue = alpha * blue
      }
    }
    scene.use([clearPainter])
    scene.start()
}
