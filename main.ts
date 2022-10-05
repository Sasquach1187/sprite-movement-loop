input.onButtonPressed(Button.A, function () {
	
})
let player = game.createSprite(4, 0)
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            player.move(1)
            basic.pause(100)
        }
        player.turn(Direction.Left, 90)
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            player.move(1)
            player.set(LedSpriteProperty.X, 4)
        }
        player.turn(Direction.Left, 90)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        player.move(1)
        player.set(LedSpriteProperty.Y, 4)
    }
    for (let index = 0; index < 1; index++) {
        player.turn(Direction.Right, 90)
        basic.pause(100)
        player.move(4)
        basic.pause(100)
    }
    control.reset()
})
