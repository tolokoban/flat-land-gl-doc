import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import codeContent from './sprites-2-code.md'
import SpriteAtlas from './atlas.png'
import BackgroundAtlas from './background.png'
import Page from '../../../view/page'

ReactDOM.render(
  <Page
    title="Quads in motion"
    codeContent={codeContent}
    onLoad={init}/>,
  document.getElementById('root')
)

async function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    const spritesAtlas = scene.createAtlas({
        image: SpriteAtlas
    })
    const backgroundAtlas = scene.createAtlas({
        image: BackgroundAtlas
    })
    const camera = new FlatLand.Camera.Silly()
    const spritesPainter = new FlatLand.Painter.Sprites({
        camera,
        atlas: spritesAtlas
    })
    const backgroundPainter = new FlatLand.Painter.Background({
        atlas: backgroundAtlas,
        align: "B"
    })

    const quad = spritesPainter.createQuad({})

    scene.onAnimation = (time: number) => {
      const [xTL, yTL] = rotate(256, 256, 256, time, 0.001234)
      const [xTR, yTR] = rotate(768, 256, 256, time + 10, 0.002034)
      const [xBR, yBR] = rotate(768, 768, 256, time - 7, 0.001034)
      const [xBL, yBL] = rotate(256, 768, 256, time + 3, 0.001724)
      quad.update({
        xTL, yTL, xTR, yTR, xBR, yBR, xBL, yBL
      })
    }
    scene.use([spritesPainter, backgroundPainter])
    scene.start()
}


function rotate(centerX: number, centerY: number, radius: number, time: number, seed: number) {
  const ang = time * seed
  return [
    centerX + radius * Math.cos(ang),
    centerY + radius * Math.sin(ang)
  ]
}
