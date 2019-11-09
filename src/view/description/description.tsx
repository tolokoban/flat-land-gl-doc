import React from "react"
import Markdown from 'markdown-to-jsx'

import "./description.css"

interface TDescriptionProps {
    content: string
}
interface TDescriptionState {}

export default class Description extends React.Component<TDescriptionProps, TDescriptionState> {
    render() {
        const classes = ['view-Description']

        return (<div className={classes.join(' ')}>
            <Markdown options={{ forceBlock: true }}>{this.props.content}</Markdown>
        </div>)
    }
}
