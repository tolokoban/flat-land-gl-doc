import React from "react"
import Icon from "tfw/dist/view/icon"
import "./page.css"


interface TPageProps {
    title: string,
    onLoad: (canvas: HTMLCanvasElement) => void
}
interface TPageState {}

export default class Page extends React.Component<TPageProps, TPageState> {
    constructor( props: TPageProps ) {
        super(props)
        this.state = {}
    }

    render() {
        const classes = ['view-Page']

        return (<div className={classes.join(' ')}>
        </div>)
    }
}
