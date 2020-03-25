import React from "react"
import Tfw from "tfw"

import "./article.css"

Tfw.Theme.register("article", {
    bgP: "#28d",
    bgS: '#fa4',
    bg0: "#99a",
    bg3: "#fff"
})
Tfw.Theme.apply("article")

const Button = Tfw.View.Button

interface TTemplateProps {
    title: string
}

interface TTemplateState {
    page: number
}

export default class Template extends React.Component<TTemplateProps, TTemplateState> {
    state = { page: 0 }

    componentDidMount() {
        const children = Tfw.Converter.Array(this.props.children, [])
        const hash = Number(window.location.hash.substr(1))
        const page = clamp(hash, 0, children.length - 1)
        if (page !== this.state.page) this.setState({ page })
    }

    private goto(page: number) {
        window.location.hash = `#${page}`
        this.setState({ page })
    }

    render() {
        const classes = ['view-Template']
        const children = Tfw.Converter.Array(this.props.children, [])
        const hash = Number(window.location.hash.substr(1))
        const page = clamp(hash, 0, children.length - 1)

        return (<div className={classes.join(' ')}>
            <div className="thm-bg0">
                <article className="thm-bg2">
                    {children[page]}
                    {
                        children.length > 1 &&
                        <nav>
                            <Button
                                small={true}
                                warning={true}
                                icon="left"
                                enabled={page > 0}
                                onClick={() => this.goto(page - 1)} />
                            <Button
                                small={true}
                                warning={true}
                                icon="right"
                                enabled={page < children.length - 1}
                                onClick={() => this.goto(page + 1)} />
                        </nav>
                    }
                </article>
            </div>
            <header className="thm-ele-nav thm-bgPD">
                <Button icon="home" small={true} warning={true} onClick={() => window.history.back()} />
                <div>{this.props.title}</div>
                <div className='pages'>Page: {
                    children.map((child, index) => (
                        <Button
                            key={`page-${index}`}
                            label={`${index + 1}`}
                            small={true}
                            enabled={page !== index}
                            onClick={() => window.location.hash = `#${index}`} />
                    ))
                }</div>
            </header>
        </div>)
    }
}


function clamp(value: number, min: number, max: number): number {
    if (isNaN(value)) return min
    if (value < min) return min
    if (value > max) return max
    return value
}
