import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import codeContent from './sprites-3-code.md'
import SpritesAtlas from './atlas.png'
import BackgroundAtlas from './background.png'
import Page from '../../../view/page'

ReactDOM.render(
    <Page
        title="Sprites in motion"
        codeContent={codeContent}
        onLoad={init} />,
    document.getElementById('root')
)

type IPlan = [number, number, number, number]

async function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    const atlases = await scene.createAtlasesAsync({
        background: { image: BackgroundAtlas },
        sprites: { image: SpritesAtlas },
    })
    const camera = new FlatLand.Camera.Perspective({ size: 1024 })
    const spritesPainter = new FlatLand.Painter.Sprites({
        camera,
        atlas: atlases.sprites
    })
    const backgroundPainter = new FlatLand.Painter.Background({
        atlas: atlases.background,
        align: "B"
    })

    function newType(x: number, y: number, w: number, h: number) {
        const atlas = atlases.sprites
        return {
            uTL: (x) / atlas.width,
            vTL: (y) / atlas.height,
            uTR: (x + w) / atlas.width,
            vTR: (y) / atlas.height,
            uBL: (x) / atlas.width,
            vBL: (y + h) / atlas.height,
            uBR: (x + w) / atlas.width,
            vBR: (y + h) / atlas.height
        }
    }
    const TYPES: { [key: string]: any } = {
        bol: newType(0, 0, 542, 318),
        corbeille: newType(0, 320, 402, 524),
        tasse: newType(401, 467, 122, 119),
        citron: newType(405, 675, 117, 110),
        croissant: newType(415, 785, 104, 72),
        framboise: newType(400, 617, 61, 58),
        noisette: newType(462, 589, 61, 85),
        the: newType(402, 316, 124, 149)
    }

    function add(name: string, x: number, y: number, lat: number, lng: number) {
        const type = TYPES[name]
        const item = spritesPainter.createQuad({

        })
        item.extra.speed1 = (1 + Math.random()) * 0.001
        item.extra.speed2 = (1 + Math.random()) * 0.001
        items.push(item)
    }

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
        camera.orbit(0, 0, 0, 1024, time * 0.001, 0)

        /*
        for (let k=0 ; k<items.length ; k++) {
            const item = items[k]
            const speed1 = item.extra.speed1
            const speed2 = item.extra.speed2
            const radius = 250 + Math.cos(time * speed1) * 50
            const angle = (time + 54321) * speed2
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)

            item.update({ x, y })
        }*/
    }
    scene.use([spritesPainter, backgroundPainter])
    scene.start()
}
