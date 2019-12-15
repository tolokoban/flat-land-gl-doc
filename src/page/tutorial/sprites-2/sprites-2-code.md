function start() {
  const scene = new FlatLand.Scene(canvas)
  const spritesAtlas = scene.createAtlas({
      image: SpriteAtlas
  })
  const backgroundAtlas = scene.createAtlas({
      image: BackgroundAtlas
  })
  const spritesPainter = new FlatLand.Painter.Sprites({
      atlas: spritesAtlas,
  })
  const backgroundPainter = new FlatLand.Painter.Background({
      atlas: backgroundAtlas,
      align: "B"
  })

  const quad = spritesPainter.createQuad({})

  scene.onAnimation = (time) => {
    const [xTL, yTL] = rotate(0, 0, 512, time, 0.001234)
    const [xTR, yTR] = rotate(0, 0, 512, time, 0.001234)
    const [xBR, yBR] = rotate(0, 0, 512, time, 0.001234)
    const [xBL, yBL] = rotate(0, 0, 512, time, 0.001234)
    quad.update({
      xTL, yTL, xTR, yTR, xBR, yBR, xBL, yBL
    })
  }
  scene.use([spritesPainter, backgroundPainter])
  scene.start()
}

function rotate(centerX, centerY, radius, time, seed) {
  const ang = time * seed
  return [
    centerX + radius * Math.cos(ang),
    centerY + radius * Math.sin(ang)
  ]
}
