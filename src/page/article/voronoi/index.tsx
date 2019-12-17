import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'markdown-to-jsx'
import { Highlight } from 'react-fast-highlight'
import FlatLandGL from 'flat-land-gl'

import Article from '../../../view/article'

ReactDOM.render(
  <Article title="Voronoi variations">
    <Markdown>
Voronoi is a technique that splits a surface in sub-regions according to a set of control points.

    </Markdown>
  </Article>,
  document.getElementById('root')
)
