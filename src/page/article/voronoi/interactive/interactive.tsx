import React from "react"
import Tfw from "tfw"
import View from '../view'
import "./interactive.css"

const Button = Tfw.View.Button
const Slider = Tfw.View.Slider
const ColorInput = Tfw.View.InputColor

type IVector3 = [number, number, number]

interface TInteractiveProps { }
interface TInteractiveState {
    selectedPointIndex: number,
    border: number,
    light: number,
    seeds: number[],
    colors: number[]
}

const STORAGE = "flat-land-gl-doc/article/voronoi"

export default class Interactive extends React.Component<TInteractiveProps, TInteractiveState> {
    constructor(props: TInteractiveProps) {
        super(props)
        this.state = {
            selectedPointIndex: 0,
            border: 0,
            light: 0,
            seeds: [
                0, 0, 1,
                .5, .2, 1,
                .3, .7, 1
            ],
            colors: [
                1, .5, 0,
                0, .5, 1,
                .5, .5, .5
            ],
            ...Tfw.Storage.local.get(STORAGE, {})
        }
    }

    componentDidUpdate() {
        Tfw.Storage.local.set(STORAGE, this.state)
    }

    private renderSeeds() {
        const { selectedPointIndex, colors, seeds } = this.state
        const selectedOffset = selectedPointIndex * 3
        const result: Array<JSX.Element> = []
        for (let offset = 0; offset < seeds.length; offset+=3) {
            const color = Tfw.Color.fromArrayRGB(
                colors.slice(offset, offset + 3) as IVector3)
            const className = selectedOffset === offset ? "thm-bgSL" : "thm-bg1"
            result.push(<div className={className}>
                <div>(
                    {seeds[offset + 0].toFixed(3)},
                    {seeds[offset + 1].toFixed(3)},
                    {seeds[offset + 2].toFixed(3)}
                )</div>
                <ColorInput value={color.stringify()}/>
            </div>)
        }
        return result
    }

    render() {
        const { border, light, colors, seeds } = this.state
        const classes = ['page-article-voronoi-Interactive']

        return (<div className={classes.join(' ')}>
            <div>
                <View
                    width={750} height={375}
                    scaleX={3} scaleY={1.5}
                    animate={false}
                    colors={colors}
                    seeds={seeds}
                    border={border * 0.01 * .2}
                    light={light * 0.01} />
                <Slider
                    label="Border"
                    min={0} max={100} step={1} value={border}
                    onChange={border => this.setState({ border })} />
                <Slider
                    label="Light"
                    min={0} max={100} step={1} value={light}
                    onChange={light => this.setState({ light })} />
                <div className="seeds">{ this.renderSeeds() }</div>
                <Button label="Add seed" icon="add"/>
                <Button label="Remove seed" warning={true} icon="delete" />
            </div>
        </div>)
    }
}
