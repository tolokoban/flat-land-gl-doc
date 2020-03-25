import React from "react"
import Tfw from 'tfw'
import FlatLand from 'flat-land-gl'
import Code from '../../../view/code'

import xPosURL from "./x-pos.jpg"
import xNegURL from "./x-neg.jpg"
import yPosURL from "./y-pos.jpg"
import yNegURL from "./y-neg.jpg"
import zPosURL from "./z-pos.jpg"
import zNegURL from "./z-neg.jpg"

import "./cube.css"

interface IImageProps {
    className?: string[]
}
interface IImageState {
}


class IPainter extends FlatLand.Painter.CubeMap { }

export default class Image extends React.Component<IImageProps, IImageState> {
    state = { alignX: 0.5, alignY: 0.5, scale: 1 }
    private refCanvas = React.createRef<HTMLCanvasElement>()

    async componentDidMount() {
        try {
            const canvas = this.refCanvas.current
            if (!canvas) return

            const scene = new FlatLand.Scene(canvas)
            const texture = await scene.createCubeMapTextureAsync({
                urlNegX: xNegURL, urlPosX: xPosURL,
                urlNegY: yNegURL, urlPosY: yPosURL,
                urlNegZ: zNegURL, urlPosZ: zPosURL
            })
            const background = new FlatLand.Painter.CubeMap({
                texture: texture
            })
            scene.onAnimation = (time: number) => {
                const lng = time * 0.001
                const lat = Math.abs(0.5 * Math.sin(time * 0.000745))
                const r = Math.cos(lat)
                const x = r * Math.cos(lng)
                const y = r * Math.sin(lng)
                const z = Math.sin(lat)
                background.x = x
                background.y = y
                background.z = z
            }
            scene.use([background])
            scene.start()
        } catch (ex) {
            console.error("Unable to mount component!")
            console.error(ex)
        }
    }

    render() {
        const classes = [
            'page-background-Cube',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]

        return (<div className={classes.join(' ')}>
            <canvas ref={this.refCanvas} className="thm-ele-button"></canvas>
        </div>)
    }
}
