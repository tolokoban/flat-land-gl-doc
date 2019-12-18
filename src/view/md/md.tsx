import React from "react"
import Markdown from 'markdown-to-jsx'
import "./md.css"

interface TMdProps {}
interface TMdState {}

export default class Md extends React.Component<TMdProps, TMdState> {
    render() {
        const classes = ['view-Md']
        return (<div className={classes.join(' ')}>
            <Markdown>{ this.props.children }</Markdown>
        </div>)
    }
}
