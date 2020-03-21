import React from "react"
import Tfw from 'tfw'
import { Highlight } from 'react-fast-highlight'

import "./code.css"

interface TCodeProps {
    lang?: string,
    src?: string
}
interface TCodeState {}

export default class Code extends React.Component<TCodeProps, TCodeState> {
    render() {
        const content = Tfw.Converter.String(this.props.src, this.props.children?.toString() || "")
        const lang = Tfw.Converter.String(this.props.lang, "js")
        const classes = ['view-Code']

        return (<div className={classes.join(' ')}>
            <Highlight languages={[lang]}>{content}</Highlight>
        </div>)
    }
}
