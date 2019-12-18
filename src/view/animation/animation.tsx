import React from "react"
import FlatLandGL from 'flat-land-gl'
import castBoolean from '../../converter/boolean'
import castString from '../../converter/string'
import castUnit from '../../converter/unit'
import "./animation.css"

class IScene extends FlatLandGL.Scene {}

interface TAnimationProps {
    init: (scene: IScene) => void,
    className?: string,
    animate?: boolean,
    width?: string | number,
    height?: string | number
}
interface TAnimationState {}

export default class Animation extends React.Component<TAnimationProps, TAnimationState> {
    private readonly ref: React.RefObject<HTMLCanvasElement> = React.createRef();

    componentDidMount() {
        const canvas = this.ref.current
        if (!canvas) return
        const scene = new FlatLandGL.Scene(canvas)
        this.props.init(scene)
        scene.start()
        const animate = castBoolean(this.props.animate, false)
        if (!animate) {
            window.requestAnimationFrame(
                () => window.requestAnimationFrame(
                    () => scene.stop()))
        }
    }

    render() {
        const classes = ['view-Animation']
        const className = castString(this.props.className, '')
        if (className.length > 0) {
            classes.push(className)
        }
        const width = castUnit(this.props.width, "320px")
        const height = castUnit(this.props.height, "320px")

        return (<div className={classes.join(' ')} style={{ width, height }}>
            <canvas ref={this.ref}></canvas>
        </div>)
    }
}
