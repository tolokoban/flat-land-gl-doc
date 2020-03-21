import React from "react"
import Tfw from 'tfw'
import FlatLand from 'flat-land-gl'
import Code from '../../../view/code'

import backgroundURL from "./background.jpg"

import "./image.css"

const Combo = Tfw.View.Combo
const Slider = Tfw.View.Slider

interface IImageProps {
    className?: string[]
}
interface IImageState {
    alignX: number,
    alignY: number,
    scale: number,
    type: string
}


class IBackground extends FlatLand.Painter.Background { }

export default class Image extends React.Component<IImageProps, IImageState> {
    state = { alignX: 0.5, alignY: 0.5, scale: 1, type: "square" }
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
            scale: 0.5
        })
        scene.use([background])
        scene.start()
        this.backgroundPainter = background
    }

    render() {
        const { alignX, alignY, scale, type } = this.state
        const classes = [
            'page-background-Image',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]
        const code = `import url from "./background.jpg"

const scene = new FlatLand.Scene(canvas)
const atlas = scene.createAtlas({ image: url })
const background = new FlatLand.Painter.Background({
    atlas,
    alignX: ${alignX},
    alignY: ${alignY},
    scale: ${scale}
})
scene.use([ background ])
scene.start()
`
        const { backgroundPainter } = this
        if (backgroundPainter) {
            backgroundPainter.alignX = alignX
            backgroundPainter.alignY = alignY
            backgroundPainter.scale = scale
        }


        return (<div className={classes.join(' ')}>
            <div className="flex">
                <Slider
                    label="alignX" min={0} max={1}
                    value={alignX} text={alignX.toFixed(2)}
                    onChange={alignX => this.setState({ alignX })} />
                <Slider
                    label="alignY" min={0} max={1}
                    value={alignY} text={alignY.toFixed(2)}
                    onChange={alignY => this.setState({ alignY })} />
            </div>
            <div className="flex">
                <Slider
                    label="scale" min={0.5} max={3}
                    value={scale} text={scale.toFixed(2)}
                    onChange={scale => this.setState({ scale })} />
                <Combo value={type} onChange={type => this.setState({ type })}>
                    <div key="landscape">Landscape</div>
                    <div key="portrait">Portrait</div>
                    <div key="square">Square</div>
                </Combo>
            </div>
            <div className="flex">
                <Code src={code} />
                <div className="canvas">
                    <canvas ref={this.refCanvas} className="thm-ele-button"
                        width={type === 'portrait' ? 120 : 200}
                        height={type === 'landscape' ? 120 : 200}></canvas>
                </div>
            </div>
        </div>)
    }
}
