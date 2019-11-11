import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'

import Canvas from '../../../canvas'
//import Description from '../../../view/description'
//import description from './sprites-1.md'
import bowlAtlas from './bowl.png'
import backgroundAtlas from './background.png'


ReactDOM.render(<div>
    <Canvas init={init}/>
    {/*<Description content={description}/>*/}
</div>, document.getElementById('root'));


async function init(canvas: HTMLCanvasElement) {
    const scene = new FlatLand.Scene(canvas)
    await scene.createAtlas({
        name: "bowl",
        image: bowlAtlas
    })
    scene.createAtlas({
        name: "background",
        image: backgroundAtlas
    })
    new FlatLand.Painter.Background({
        scene,
        atlas: "background",
        align: "B"
    })
    const sprites = new FlatLand.Painter.Sprites({
        scene,
        atlas: "bowl"
    })

    const bowls: any[] = []
    for (let count=0 ; count<7 ; count++) {
        const bowl = sprites.createSprite({
            x: 500, y: 500 })
        bowls.push(bowl)
    }

    scene.onAnimation = (time: number) => {
        for (let k=0 ; k<bowls.length ; k++) {
            const bowl = bowls[k]
            const speed1 = 0.001 * Math.sin(k)
            const speed2 = 0.001 * Math.cos(2 * k)

            const radius = (1 + Math.cos(time * (0.00147 + speed1))) * 100 + 50
            const angle = time * (0.00247 + speed2)
            const x = 500 + radius * Math.cos(angle)
            const y = 500 + radius * Math.sin(angle)

            bowl.update({ x, y, scale: (radius + 250) / 500 })
        }
    }
    scene.start()
}
