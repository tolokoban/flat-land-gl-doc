import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'

import Canvas from '../../../canvas'
//import Description from '../../../view/description'
//import description from './sprites-1.md'
import atlasAtlas from './atlas.png'
import backgroundAtlas from './background.png'


ReactDOM.render(<div>
    <Canvas init={init}/>
    {/*<Description content={description}/>*/}
</div>, document.getElementById('root'));


async function init(canvas: HTMLCanvasElement) {
    function newType(x: number, y: number, w: number, h: number) {
        return {
            width: w,
            height: h,
            u0: x / 524,
            v0: y / 856,
            u1: (x + w) / 524,
            v1: (y + h) / 856
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
            const item = sprites.createSprite(type)
            item.extra.speed1 = (1 + Math.random()) * 0.001
            item.extra.speed2 = (1 + Math.random()) * 0.001
            items.push(item)
        }
    }

    const scene = new FlatLand.Scene(canvas)
    scene.createAtlas({
        name: "atlas",
        image: atlasAtlas
    })
    scene.createAtlas({
        name: "background",
        image: backgroundAtlas
    })
    const sprites = new FlatLand.Painter.Sprites({
        scene,
        atlas: "atlas"
    })
    new FlatLand.Painter.Background({
        scene,
        atlas: "background",
        align: "B"
    })

    const items: any[] = []
    add(items, "bol")
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
            const x = 500 + radius * Math.cos(angle)
            const y = 500 + radius * Math.sin(angle)
            const z = radius / 500

            item.update({ x, y, z, scale: (radius + 250) / 1000 })
        }
    }
    scene.start()
}
