import url from "./background.jpg"

const scene = new FlatLand.Scene(canvas)
const atlas = scene.createAtlas({ image: url })
const background = new FlatLand.Painter.Background({
    atlas, align: "BR"
})
scene.use([ background ])
scene.start()
