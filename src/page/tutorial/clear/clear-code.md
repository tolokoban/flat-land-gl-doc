const scene = new FlatLandGL.Scene(canvas)
const clearPainter = new FlatLandGL.Painter.Clear({ color: "#d72" })
scene.use([clearPainter])
scene.start()
