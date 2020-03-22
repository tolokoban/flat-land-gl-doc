import React from "react"
import Tfw from 'tfw'
import FlatLand from 'flat-land-gl'
import Code from '../../../view/code'

import backgroundURL from "./background.jpg"

import "./image.css"

const Slider = Tfw.View.Slider

interface IImageProps {
    className?: string[]
}
interface IImageState {
    alignX: number,
    alignY: number,
    scale: number
}


class IBackground extends FlatLand.Painter.Background { }

export default class Image extends React.Component<IImageProps, IImageState> {
    state = { alignX: 0.5, alignY: 0.5, scale: 1 }
    private refCanvas1 = React.createRef<HTMLCanvasElement>()
    private refCanvas2 = React.createRef<HTMLCanvasElement>()
    private backgroundPainter1?: IBackground
    private backgroundPainter2?: IBackground

    componentDidMount() {
        const canvas1 = this.refCanvas1.current
        if (!canvas1) return

        const scene1 = new FlatLand.Scene(canvas1)
        const atlas1 = scene1.createAtlas({ image: backgroundURL })
        const background1 = new FlatLand.Painter.Background({
            atlas: atlas1,
            alignX: 0.5,
            alignY: 0.5,
            scale: 1
        })
        scene1.use([background1])
        scene1.start()
        this.backgroundPainter1 = background1

        const canvas2 = this.refCanvas2.current
        if (!canvas2) return

        const scene2 = new FlatLand.Scene(canvas2)
        const atlas2 = scene2.createAtlas({ image: backgroundURL })
        const background2 = new FlatLand.Painter.Background({
            atlas: atlas2,
            alignX: 0.5,
            alignY: 0.5,
            scale: 1
        })
        scene2.use([background2])
        scene2.start()
        this.backgroundPainter2 = background2
    }

    render() {
        const { alignX, alignY, scale } = this.state
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
        const { backgroundPainter1 } = this
        if (backgroundPainter1) {
            backgroundPainter1.alignX = alignX
            backgroundPainter1.alignY = alignY
            backgroundPainter1.scale = scale
        }

        const { backgroundPainter2 } = this
        if (backgroundPainter2) {
            backgroundPainter2.alignX = alignX
            backgroundPainter2.alignY = alignY
            backgroundPainter2.scale = scale
        }

        return (<div className={classes.join(' ')}>
            <div className="flex">
                <div>
                    <Slider
                        label="alignX" min={0} max={1}
                        value={alignX} text={alignX.toFixed(2)}
                        onChange={alignX => this.setState({ alignX })} />
                    <Slider
                        label="alignY" min={0} max={1}
                        value={alignY} text={alignY.toFixed(2)}
                        onChange={alignY => this.setState({ alignY })} />
                    <Slider
                        label="scale" min={0.5} max={3}
                        value={scale} text={scale.toFixed(2)}
                        onChange={scale => this.setState({ scale })} />
                    <Code src={code} />
                </div>
                <div className="flex">
                    <div className="canvas">
                        <canvas ref={this.refCanvas1} className="thm-ele-button"
                            width={250} height={400}></canvas>
                    </div>
                </div>
            </div>
            <canvas ref={this.refCanvas2} className="thm-ele-button"
                width={782} height={200}></canvas>
        </div>)
    }
}
