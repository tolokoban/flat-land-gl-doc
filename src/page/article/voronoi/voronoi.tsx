import React from 'react'
import ReactDOM from 'react-dom'
import MD from '../../../view/md'
import View from './view'
import Interactive from './interactive'
import Code from '../../../view/code'
import Table from '../../../view/table'
import distSquaredFrag from './code/distSquared.frag'
import lightFrag from './code/light.frag'
import borderFrag from './code/border.frag'
import Tfw from "tfw"
import Article from '../../../view/article'

Tfw.Theme.apply("default")

const seeds4 = [
  rnd(.1, .4), rnd(.1, .4), 1,
  rnd(.1, .4), rnd(.6, .9), 1,
  rnd(.6, .9), rnd(.1, .4), 1,
  rnd(.6, .9), rnd(.6, .9), 1
]

const colors4 = [
  1, .5, 0,
  0, .5, 1,
  .5, .25, 0,
  0, .25, .5
]

const seedsWeight = [
  rnd(.1, .4), rnd(.1, .4), 1,
  rnd(.1, .4), rnd(.6, .9), 1,
  rnd(.6, .9), rnd(.1, .4), 1,
  rnd(.6, .9), rnd(.6, .9), 1,
  rnd(.4, .6), rnd(.1, .4), 5,
  rnd(.4, .6), rnd(.6, .9), 5,
  rnd(.1, .4), rnd(.4, .6), 5,
  rnd(.6, .9), rnd(.4, .6), 5
]

const colorsWeight = [
  0, .5, 1,
  0, .4, .8,
  0, .3, .6,
  0, .2, .4,
  1, .5, 0,
  .8, .4, 0,
  .6, .3, 0,
  .3, .2, 0
]


ReactDOM.render(
  <Article title="Voronoi variations">
    <section>
      <h1>Basic Voronoi</h1>
      <View className="float-right"
        width="250"
        height="250"
        seeds={seeds4}
        colors={colors4}
        border={0}
        light={0} />
      <MD>Voronoi is a technique that splits a surface in sub-regions according
    to a set of control points.</MD>
      <MD>In this example,
    we use 4 control points each one in a quarter of the screen.</MD>
      <MD>The algorithm is quite simple: for each point in the screen,
    find the nearest control point and paint the pixel with its color.</MD>
    </section>

    <section>
      <h1>Shading and borders</h1>
      <View className="float-left"
        width="250"
        height="250"
        scaleX={3}
        scaleY={3}
        seeds={seeds4}
        colors={colors4}
        border={0}
        light={0} />
      <MD>The space coordinates are between 0 and 1.
            We use the following squared distance in order to make the Voronoi result tilable.</MD>
      <Code lang="glsl" src={distSquaredFrag} />
    </section>

    <section>
      <View className="float-right"
        width="250"
        height="250"
        scaleX={2}
        scaleY={2}
        seeds={seeds4}
        colors={colors4}
        border={0}
        light={.5} />
      <MD>Since we know the distance of a pixel to the closest control point,
                                    we can add some lightening.</MD>
      <Code lang="glsl" src={lightFrag} />
    </section>

    <section>
      <View className="float-left"
        scaleX={2}
        scaleY={2}
        width="150"
        height="150"
        seeds={seeds4}
        colors={colors4}
        border={0.02}
        light={0} />
      <View className="float-right"
        scaleX={2}
        scaleY={2}
        width="150"
        height="150"
        seeds={seeds4}
        colors={colors4}
        border={.1}
        light={0} />
      <View className="float-left"
        scaleX={2}
        scaleY={2}
        width="150"
        height="150"
        seeds={seeds4}
        colors={colors4}
        border={0.02}
        light={.5} />
      <View className="float-right"
        scaleX={2}
        scaleY={2}
        width="150"
        height="150"
        seeds={seeds4}
        colors={colors4}
        border={0.1}
        light={.5} />
      <View className="float-left"
        scaleX={2}
        scaleY={2}
        width="150"
        height="150"
        seeds={seeds4}
        colors={colors4}
        border={0.02}
        light={1} />
      <View className="float-right"
        scaleX={2}
        scaleY={2}
        width="150"
        height="150"
        seeds={seeds4}
        colors={colors4}
        border={0.1}
        light={1} />
      <MD>And some border around the **cells**.
            We call _cell_ a region belonging to an unique control point.</MD>
      <Code lang="glsl" src={borderFrag} />
      <MD>Obviously, you can combine ligth and border.</MD>
      <Table>{
        [
          ["B=0.02, L=0.0", "B=0.10, L=0.0"],
          ["B=0.02, L=0.5", "B=0.10, L=0.5"],
          ["B=0.02, L=1.0", "B=0.10, L=1.0"]
        ]
      }</Table>
      <MD>
        In this table, you can see the parameters applied to the 6 examples.
        * **B**: Border
        * **L**: Light
            </MD>
    </section>

    <section>
      <h1>Weights</h1>
      <View className="float-left"
        width="300"
        height="300"
        scaleX={2}
        scaleY={2}
        seeds={seedsWeight}
        colors={colorsWeight}
        border={0}
        light={0} />
      We already set a color for each control point, but we can also attach a weight.
      In this example, we use 4 blue control points of weight 1 and
      4 orange of weight 5.
        </section>

    <section>
      <h1>Do it yourself</h1>
      <Interactive />
    </section>
  </Article>,
  document.getElementById('root'))


function rnd(min: number = 0, max: number = 1): number {
  return min + Math.random() * (max - min)
}
