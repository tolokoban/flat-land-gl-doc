import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import codeContent from './sprites-2-code.md'
import AtlasAtlas from './atlas.png'
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
        image: AtlasAtlas
    })
    const backgroundAtlas = scene.createAtlas({
        image: BackgroundAtlas
    })
    const spritesPainter = new FlatLand.Painter.Sprites({
        atlas: spritesAtlas,
    })
    const backgroundPainter = new FlatLand.Painter.Background({
        atlas: backgroundAtlas,
        align: "B"
    })

    const quad = spritesPainter.createQuad({})
    scene.onAnimation = (time: number) => {
        
    }
}
