import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import codeContent from './sprites-1-code.md'
import SpritesAtlas from './atlas.png'
import BackgroundAtlas from './background.png'
import Page from '../../../view/page'

ReactDOM.render(
  <Page
    title="Sprites in motion"
    codeContent={codeContent}
    onLoad={init}/>,
  document.getElementById('root')
)

async function init(canvas: HTMLCanvasElement) {
    function newType(x: number, y: number, w: number, h: number) {
        return {
            x: 0,
            y: 0,
            z: 0,
            width: w,
            height: h,
            u0: x / 1024,
            v0: y / 1024,
            u1: (x + w) / 1024,
            v1: (y + h) / 1024,
            originX: w / 2,
            originY: h / 2,
            scale: 1,
            angle: 0
        }
    }
    const TYPES: {[key: string]: any} = {
        bol: newType(0, 0, 542, 318),
        corbeille: newType(0, 320, 402, 524),
        tasse: newType(401, 467, 122, 119),
        citron: newType(405, 675, 117, 110),
        croissant: newType(415, 785, 104, 72),
        framboise: newType(400, 617, 61, 58),
        noisette: newType(462, 589, 61, 85),
        the: newType(402, 316, 124, 149)
    }

    function add(items: any[], name: string, count: number = 1) {
        for (let k=0 ; k<count ; k++) {
            const type = TYPES[name]
            const item = spritesPainter.createSprite(type)
            item.extra.speed1 = (1 + Math.random()) * 0.001
            item.extra.speed2 = (1 + Math.random()) * 0.001
            items.push(item)
        }
    }

    const scene = new FlatLand.Scene(canvas)
    const spritesAtlas = scene.createAtlas({
        image: SpritesAtlas
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

    const items: any[] = []
    add(items, "bol")
    items[0].update({
        x: 0, y: 0, z: 0,
        width: 200, height: 200
    })

    add(items, "corbeille")
    add(items, "tasse", 12)
    add(items, "citron", 17)
    add(items, "croissant", 23)
    add(items, "framboise", 47)
    add(items, "noisette", 20)
    add(items, "the", 10)

    scene.onAnimation = (time: number) => {
        for (let k=0 ; k<items.length ; k++) {
            const item = items[k]
            const speed1 = item.extra.speed1
            const speed2 = item.extra.speed2
            const radius = (1 + Math.cos(time * speed1)) * 120 + 10
            const angle = time * speed2
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            const z = radius / 500

            item.update({ x, y, z, scale: (radius + 250) / 1024 })
        }
    }
    scene.use([ spritesPainter, backgroundPainter ])
    scene.start()
}
