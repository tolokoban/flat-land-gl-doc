import url from "./background.jpg"

const scene = new FlatLand.Scene(canvas)
const texture = await scene.createTextureFromImageAsync( url )
const background = new FlatLand.Painter.Background({
    texture, align: "BR"
})
scene.use([ background ])
scene.start()
