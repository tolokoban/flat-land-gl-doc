import React from "react"
//import Icon from "tfw/dist/view/icon"
import Canvas from '../canvas'
import Markdown from 'markdown-to-jsx'
import { Highlight } from 'react-fast-highlight'
import Button from '../button'
import "./page.css"

interface TPageProps {
    title: string,
    preContent?: string,
    codeContent?: string,
    postContent?: string,
    onLoad: (canvas: HTMLCanvasElement) => void
}
interface TPageState {
  visible: boolean
}

export default class Page extends React.Component<TPageProps, TPageState> {
  constructor( props: TPageProps ) {
      super(props)
      this.state = { visible: true }
  }

  private handleToggle = () => {
    console.info("this.state=", this.state);
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { preContent, codeContent, postContent } = this.props
    const classes = ['view-Page']

    return (<div className={classes.join(' ')}>
      <header className="thm-ele-nav thm-bgP">
        <Button label="back" onClick={() => window.history.back()}/>
        <div>{this.props.title}</div>
        <Button label="doc." onClick={this.handleToggle}/>
      </header>
      <Canvas init={this.props.onLoad}/>
      <div className={this.state.visible ? 'desc-show' : 'desc-hide'}>
        {
          preContent &&
          <Markdown options={{ forceBlock: true }}>{preContent}</Markdown>
        }
        {
          codeContent &&
          <Highlight languages={['js']}>{
            codeContent
          }</Highlight>
        }
        {
          postContent &&
          <Markdown options={{ forceBlock: true }}>{postContent}</Markdown>
        }
      </div>
    </div>)
  }
}
