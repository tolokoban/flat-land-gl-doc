import React from "react"

import "./button.css"

interface IButtonProps {
    label: string,
    onClick: () => void
}

export default class Button extends React.Component<IButtonProps, {}> {
  private handleClick = () => {
    console.log("Click!")
    this.props.onClick()
  }

  render() {
    return (<button className="Button thm-ele-button thm-bgS"
                    onClick={this.handleClick}>{
        this.props.label
      }</button>)
    }
}
