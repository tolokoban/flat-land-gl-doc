Resize the browser to see how the background adapts.


```js
import url from "./background.jpg"

const scene = new FlatLand.Scene(canvas)
scene.createAtlas({
    name: "background",
    image: background
})
new FlatLand.Painter.Background({
    scene,
    atlas: "background",
    align: "BR"
})
scene.start()
```
