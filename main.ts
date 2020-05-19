/**
 * salto espacio 10x
 * 
 * doble salto espacio x 2 30y
 */
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += 30
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 10
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 f 2 2 . . . . . 
. . . . 2 2 2 f 2 f 2 2 . . . . 
. . . . 2 2 f f f f f 2 . . . . 
. . . . 2 2 f 2 2 2 f 2 . . . . 
. 1 . e e e e e e e e e e . 1 . 
. 1 1 . 4 4 4 4 4 4 4 4 . 1 1 . 
. 1 1 1 4 f 4 4 4 f 4 4 1 1 1 . 
. 1 1 1 4 4 4 4 4 4 4 4 1 1 1 . 
. . . . 4 4 4 4 4 4 4 4 . . . . 
. . . . 4 f 4 4 4 4 4 4 . . . . 
. . . . 4 f f f f f 4 4 . . . . 
. . . . 4 4 4 4 4 4 4 4 . . . . 
. . . . . 7 . . . . 7 . . . . . 
. . . . 7 7 . . . . 7 7 . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
