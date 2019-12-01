import React from "react"

interface ICanvasProps {
    init: (canvas: HTMLCanvasElement) => void
}

export default class Canvas extends React.Component<ICanvasProps, {}> {
    private readonly ref: React.RefObject<HTMLCanvasElement> = React.createRef();

    componentDidMount() {
        const canvas = this.ref.current
        if (!canvas) return
        this.props.init(canvas)
    }

    render() {
        return (<canvas ref={this.ref} className="Canvas"></canvas>)
    }
}
