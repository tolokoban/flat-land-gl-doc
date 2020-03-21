const scene = new FlatLandGL.Scene(canvas)
const clearPainter = new FlatLandGL.Painter.Clear({ color: "#d72" })
const red = clearPainter.red
const green = clearPainter.green
const blue = clearPainter.blue
scene.onAnimation = (time: number) => {
    const alpha = Math.abs(Math.cos(time * 0.0011))
    const beta = Math.abs(Math.cos(time * 0.0017))
    const gamma = Math.abs(Math.cos(time * 0.0013))
    clearPainter.red = alpha * red
    clearPainter.green = beta * green
    clearPainter.blue = gamma * blue
}
scene.use([clearPainter])
scene.start()
