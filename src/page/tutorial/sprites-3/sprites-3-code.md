const scene = new FlatLand.Scene(canvas)
const atlas = scene.createAtlas({
    image: bowlAtlas
})
const spritesPainter = new FlatLand.Painter.Sprites({
    atlas
})
const bowl = spritesPainter.createSprite({
    x: 500, y: 500
})
scene.onAnimation = time => {
  const angle = time * 2
  const x = 512 + 200 * Math.cos(angle)
  const y = 512 + 200 * Math.sin(angle)
  bowl.update({ x, y, angle })
}
scene.use([ spritesPainter ])
scene.start()
