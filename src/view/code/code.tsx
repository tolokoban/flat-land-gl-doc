import React from "react"

import { Highlight } from 'react-fast-highlight'

import "./code.css"

interface TCodeProps {
    lang: string,
    src: string
}
interface TCodeState {}

export default class Code extends React.Component<TCodeProps, TCodeState> {
    render() {
        const classes = ['view-Code']

        return (<div className={classes.join(' ')}>
            <Highlight languages={[this.props.lang]}>{
                this.props.src
            }</Highlight>
        </div>)
    }
}
