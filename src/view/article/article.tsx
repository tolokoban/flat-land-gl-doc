import React from "react"
import Button from '../button'
import Tfw from "tfw"

import "./article.css"

Tfw.Theme.register("article", {
    bgP: "#28d",
    bgS: "#af4",  // #fa4
    bg0: "#aaa",
    bg3: "#fff"
})
Tfw.Theme.apply("article")

interface TTemplateProps {
    title: string
}

export default class Template extends React.Component<TTemplateProps, {}> {
    render() {
        const classes = ['view-Template']

        return (<div className={classes.join(' ')}>
            <div className="thm-bg0">
                <article className="thm-bg2">{
                    this.props.children
                }</article>
            </div>
            <header className="thm-ele-nav thm-bgP">
              <Button label="back" onClick={() => window.history.back()}/>
              <div>{this.props.title}</div>
            </header>
        </div>)
    }
}
