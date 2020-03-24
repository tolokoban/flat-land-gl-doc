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
    const atlases = {
        background: await scene.createTextureFromImageAsync(BackgroundAtlas),
        sprites: await scene.createTextureFromImageAsync(SpritesAtlas)
    }
    const camera = new FlatLand.Camera.Perspective()
    const spritesPainter = new FlatLand.Painter.Sprites({
        camera,
        texture: atlases.sprites
    })
    const backgroundPainter = new FlatLand.Painter.Background({
        texture: atlases.background
    })

    function newType(x: number, y: number, w: number, h: number) {
        const atlas = atlases.sprites
        return {
            u0: (x) / atlas.width,
            v0: (y) / atlas.height,
            u1: (x + w) / atlas.width,
            v1: (y + h) / atlas.height,
            width: w,
            height: h,
            originX: w / 2,
            originY: h / 2
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

    function add(items: any[], name: string, count: number = 1) {
        for (let k = 0; k < count; k++) {
            const type = TYPES[name]
            const item = spritesPainter.createSprite({
                ...type,
                x: rnd(-300, +300),
                y: rnd(-300, +300),
                z: rnd(-17, +17)
            })
            items.push(item)
        }
    }

    const items: any[] = []
    add(items, "bol")
    items[0].update({ x: 0, y: 0, z: 200 })
    add(items, "corbeille")
    items[1].update({ x: 0, y: 0, z: 0 })
    add(items, "tasse", 1)
    items[2].update({ x: 0, y: 0, z: -200 })
    add(items, "croissant", 17)
    /*
    add(items, "citron", 7)
    add(items, "framboise", 7)
    add(items, "noisette", 2)
    add(items, "the", 1)
    */

    const croissants = items.slice(3)
    const nbCroissants = croissants.length

    scene.onAnimation = (time: number) => {
        const lat = 1 * scene.pointer.y / scene.height
        const lng = time * 0.00023
        camera.orbit(0, 0, 0, 1024, lat, lng)

        for (let i = 0 ; i < nbCroissants ; i++) {
            const croissant = croissants[i]
            const angle = 2 * Math.PI * i / nbCroissants
            const radius = 250 + Math.abs(150 * Math.sin(time * 0.003))
            croissant.update({
                angle: (i & 1 ? 1 : -1) * time * (2 + 3 * (i / nbCroissants)),
                x: radius * Math.cos(angle),
                y: radius * Math.sin(angle)
            })
        }
    }
    scene.use([spritesPainter, backgroundPainter])
    scene.start()
}


function rnd(min: number, max: number) {
    return min + Math.random() * (max - min)
}
