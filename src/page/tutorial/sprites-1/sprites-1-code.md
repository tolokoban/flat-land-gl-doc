const scene = new FlatLand.Scene(canvas)
scene.createAtlas({
    name: "background",
    image: backgroundAtlas
})
scene.createAtlas({
    name: "bowl",
    image: bowlAtlas
})
new FlatLand.Painter.Background({
    atlas: "background",
    align: "B"
})
const sprites = new FlatLand.Painter.Sprites({
    atlas: "bowl"
})
const bowl = sprites.createSprite({
    x: 500, y: 500
})
scene.start()
