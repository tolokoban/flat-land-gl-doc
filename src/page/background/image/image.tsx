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
    private backgroundPainters: IBackground[] = []

    async componentDidMount() {
        try {
            const canvases = [this.refCanvas1.current, this.refCanvas2.current]
            for (const canvas of canvases) {
                if (!canvas) continue

                const scene = new FlatLand.Scene(canvas)
                const texture = await scene.createTextureFromImageAsync(backgroundURL)
                const background = new FlatLand.Painter.Background({
                    texture: texture,
                    alignX: 0.5,
                    alignY: 0.5,
                    scale: 1                    
                })
                scene.use([background])
                scene.start()
                this.backgroundPainters.push(background)
            }
        } catch (ex) {
            console.error("Unable to mount component!")
            console.error(ex)
        }
    }

    render() {
        const { alignX, alignY, scale } = this.state
        const classes = [
            'page-background-Image',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]
        const code = `import url from "./background.jpg"

const scene = new FlatLand.Scene(canvas)
const texture = await scene.createTextureFromImageAsync( url )
const background = new FlatLand.Painter.Background({
    texture,
    alignX: ${alignX},
    alignY: ${alignY},
    scale: ${scale}
})
scene.use([ background ])
scene.start()
`
        for (const painter of this.backgroundPainters) {
            if (!painter) continue
            painter.alignX = alignX
            painter.alignY = alignY
            painter.scale = scale
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
