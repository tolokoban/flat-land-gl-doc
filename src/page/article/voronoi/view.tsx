import React from "react"
import FlatLandGL from 'flat-land-gl'
import Animation from '../../../view/animation'
import castInteger from '../../../converter/integer'

class IScene extends FlatLandGL.Scene {}

interface IVoronoiProps {
    className?: string,
    animate?: boolean,
    width?: number | string,
    height?: number | string,
    seeds: number[],
    colors: number[],
    border: number,
    light: number,
    scaleX?: number,
    scaleY?: number
}

export default class Voronoi extends React.Component<IVoronoiProps, {}> {
    private scene: IScene | null = null

    handleInit = (scene: IScene) => {
        this.scene = scene
        this.refresh()
    }

    private refresh = () => {
        const { scene } = this
        if (!scene) return
        const { seeds, colors, border, light, scaleX, scaleY } = this.props
        const voronoiPainter = new FlatLandGL.Painter.Voronoi({
            seeds, colors, border, light,
            scaleX: castInteger(scaleX, 1),
            scaleY: castInteger(scaleY, 1)
        })
        scene.use([ voronoiPainter ])
        scene.start()
    }

    componentDidUpdate() {
        this.refresh()
    }

    render() {
        const { animate, width, height, className } = this.props
        return <Animation
                    className={className}
                    animate={animate}
                    width={width}
                    height={height}
                    init={this.handleInit}/>
    }
}
