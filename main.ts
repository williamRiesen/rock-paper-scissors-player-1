input.onButtonPressed(Button.A, function () {
    radio.sendValue("Player 2", 0)
    rockImage.showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Player 2", 2)
    scissorsImage.showImage(0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "RESET") {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . #
            . . # # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Player 2", 1)
    paperImage.showImage(0)
})
let scissorsImage: Image = null
let paperImage: Image = null
let rockImage: Image = null
radio.setGroup(1)
rockImage = images.createImage(`
    . # # . .
    # # # # .
    # # # # .
    # # # # .
    . # # . .
    `)
paperImage = images.createImage(`
    # # # # .
    # . . # .
    # . . # .
    # . . # .
    # # # # .
    `)
scissorsImage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
let imageList = [rockImage, paperImage, scissorsImage]
