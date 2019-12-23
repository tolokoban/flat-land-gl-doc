import React from "react"
import Tfw from "tfw"
import "./interactive.css"

const Button = Tfw.View.Button

interface TInteractiveProps {}
interface TInteractiveState {}

export default class Interactive extends React.Component<TInteractiveProps, TInteractiveState> {
    constructor( props: TInteractiveProps ) {
        super(props)
        this.state = {}
    }

    render() {
        const classes = ['page-article-voronoi-Interactive']

        return (<div className={classes.join(' ')}>
          <div>
            <Button label="Update" />
          </div>
        </div>)
    }
}
