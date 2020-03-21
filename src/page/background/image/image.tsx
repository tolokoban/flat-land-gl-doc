import React from "react"
import Tfw from 'tfw'
import FlatLand from 'flat-land-gl'
import Code from '../../../view/code'

import backgroundURL from "./background.jpg"

import "./image.css"

const Button = Tfw.View.Button
const _ = Tfw.Intl.make(require("./image.yaml"))

interface IImageProps {
    className?: string[]
}
interface IImageState {}

class IBackground extends FlatLand.Painter.Background {}

export default class Image extends React.Component<IImageProps, IImageState> {
    state = {}
    private refCanvas = React.createRef<HTMLCanvasElement>()
    private backgroundPainter?: IBackground

    componentDidMount() {
        const canvas = this.refCanvas.current
        if (!canvas) return

        const scene = new FlatLand.Scene(canvas)
        const atlas = scene.createAtlas({ image: backgroundURL })
        const background = new FlatLand.Painter.Background({
            atlas,
            alignX: 0,
            alignY: 0,
            scale: 1
        })
        scene.use([ background ])
        scene.start()
        this.backgroundPainter = background
    }

    render() {
        const classes = [
            'page-background-Image',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]
        const code = `import url from "./background.jpg"

const scene = new FlatLand.Scene(canvas)
const atlas = scene.createAtlas({ image: url })
const background = new FlatLand.Painter.Background({
    atlas,
    alignX: 0,
    alignY: 0,
    scale: 1
})
scene.use([ background ])
scene.start()
`
        /*const { backgroundPainter } = this
        if (backgroundPainter) {
            backgroundPainter.align = align
        }*/

        return (<div className={classes.join(' ')}>
            <div>
                <Code src={code} />
            </div>
            <canvas ref={this.refCanvas} className="thm-ele-button" width="384" height="256"></canvas>
        </div>)
    }
}
