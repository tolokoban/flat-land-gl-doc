import React from "react"
import Tfw from 'tfw'
import FlatLandGL from 'flat-land-gl'
import Code from '../../../view/code'

import clearCode from './clear-code.md'

import "./clear.css"

interface IClearProps {
    className?: string[]
}
interface IClearState { }

export default class Clear extends React.Component<IClearProps, IClearState> {
    state = {}
    private refCanvas = React.createRef<HTMLCanvasElement>()

    componentDidMount() {
        const canvas = this.refCanvas.current
        if (!canvas) return

        const scene = new FlatLandGL.Scene(canvas)
        const clearPainter = new FlatLandGL.Painter.Clear({ color: "#d72" })
        const red = clearPainter.red
        const green = clearPainter.green
        const blue = clearPainter.blue
        scene.onAnimation = (time: number) => {
            const alpha = Math.abs(Math.cos(time * 0.0011))
            const beta = Math.abs(Math.cos(time * 0.0017))
            const gamma = Math.abs(Math.cos(time * 0.0013))
            clearPainter.red = alpha * red
            clearPainter.green = beta * green
            clearPainter.blue = gamma * blue
        }
        scene.use([clearPainter])
        scene.start()
    }

    render() {
        const classes = [
            'page-background-Clear',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]

        return (<div className={classes.join(' ')}>
            <Code src={clearCode} />
            <canvas ref={this.refCanvas} width="256" height="256"></canvas>
        </div>)
    }
}
