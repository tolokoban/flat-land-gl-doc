# Hello world!

We strongly advise you to use the [Node Version Manager](https://github.com/nvm-sh/nvm/blob/master/README.md) to prevent using `sudo`.

This is the simplest tutorial, we will only display an orange screen.
But if you have never created a React App before, we will detailed the whole process in details.

## Creating a new project
We will call it __best-game-ever__.

```
nvm install node
npx create-react-app best-game-ever --typescript
```

## Adding FlatLandGL reference

```
cd best-game-ever
npm install
npm install --save flat-land-gl
```

## Creating needed boilerplate

```
rm src/logo.svg src/App.* src/index.* serviceWorker.*
```

Create `src/canvas.css`:
```css
html, body, div.root, canvas.Canvas {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
```

Create `src/canvas.tsx`:
```ts
import React from "react"
import "./canvas.css"

interface ICanvasProps {
    init: (canvas: HTMLCanvasElement) => void
}

export default class Canvas extends React.Component<ICanvasProps, {}> {
    private readonly ref: React.RefObject<HTMLCanvasElement> = React.createRef();

    componentDidMount() {
        const canvas = this.ref.current
        if (!canvas) return
        this.props.init(canvas)
    }

    render() {
        return (<canvas ref={this.ref} className="Canvas"></canvas>)
    }
}
```

Create `src/index.tsx`:
```ts
import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import Canvas from './canvas'

ReactDOM.render(<Canvas init={init}/>, document.getElementById('root'));

/**
 * Here is the code for your wonderful game!
 */
function init(canvas: HTMLCanvasElement) {
    // Create a Scene for the canvas.
    const scene = new FlatLand.Scene(canvas)
    // Add a simple painter.
    new FlatLand.Painter.Clear("background", scene)
    // Start rendering.
    scene.start()
}
```

## Launching your application locally

```
npm start
```

## Share it to the world

Create a local GIT repository:
```
git init
git add . -A
git commit -am "First commit."
```

Now [create a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) on GitHub. It is easier if you give it the name of your project: __best-game-ever__.

We will assume your account on GitHub is __BestHackerEver__. Execute the following commands to synchronize your remote repository with your local repository:

```
git remote add origin https://github.com/BestHackerEver/best-game-ever
git push -u origin master
```

We can now use __gh-pages__ which is a static web server provided by GitHub to share your awesome game to the world.

```
npm install --save-dev gh-pages
```

Finally, let's edit `package.json` and add two new scripts:
```json
{
    ...
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        ...
    }
}
```

## Day to day work
