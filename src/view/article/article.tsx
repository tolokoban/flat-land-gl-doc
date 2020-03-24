import React from "react"
import Tfw from "tfw"

import "./article.css"

Tfw.Theme.register("article", {
    bgP: "#28d",
    bgS: '#fa4',
    bg0: "#aaa",
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

    render() {
        const classes = ['view-Template']
        const children = Tfw.Converter.Array(this.props.children, [])
        const { page } = this.state

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
                                onClick={() => this.setState({ page: page - 1 })} />
                            <Button
                                small={true}
                                warning={true}
                                icon="right"
                                enabled={page < children.length - 1}
                                onClick={() => this.setState({ page: page + 1 })} />
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
                            label={`${index + 1}`}
                            small={true}
                            enabled={page !== index}
                            onClick={() => this.setState({ page: index })} />
                    ))
                }</div>
            </header>
        </div>)
    }
}
