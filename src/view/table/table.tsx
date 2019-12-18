import React from "react"
import Markdown from 'markdown-to-jsx'

import "./table.css"

interface TTableProps {
  children: string[][]
}

export default class Table extends React.Component<TTableProps, {}> {
    render() {
        const classes = ['view-Table']

        return (<div className={classes.join(' ')}>{
          this.props.children.map((row: string[], rowIndex) =>
            <div key={`row-${rowIndex}`}>{
              row.map((data: string, colIndex) =>
                <div key={`col-${colIndex}`}>
                  <Markdown>{ data }</Markdown>
                </div>
              )
            }</div>
          )
        }</div>)
    }
}
