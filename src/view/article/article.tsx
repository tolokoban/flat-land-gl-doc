import React from "react"
import Button from '../button'

import "./article.css"

interface TTemplateProps {
    title: string
}

export default class Template extends React.Component<TTemplateProps, {}> {
    render() {
        const classes = ['view-Template']

        return (<div className={classes.join(' ')}>
            <header className="thm-ele-nav thm-bgP">
              <Button label="back" onClick={() => window.history.back()}/>
              <div>{this.props.title}</div>
            </header>
            <div className="thm-bg0">
                <article className="thm-bg2">{
                    this.props.children
                }</article>
            </div>
        </div>)
    }
}
