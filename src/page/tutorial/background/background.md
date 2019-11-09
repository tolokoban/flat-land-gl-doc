Resize the browser to see how the background adapts.


```js
import url from "./background.jpg"

const scene = new FlatLand.Scene(canvas)
scene.createAtlas({
    name: "background",
    image: url
})
new FlatLand.Painter.Background("painter", scene, {
    atlasName: "background",
    // (B)ottom (R)ight corner will be always visible.
    align: "BR"
})
scene.start()
```
