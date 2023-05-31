input.onButtonPressed(Button.A, function () {
    if (nombre % 4 == 0) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(score + 1)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("perdu")
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (nombre % 4 != 0) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(score + 1)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("perdu")
        basic.clearScreen()
    }
})
let score = 0
let nombre = 0
nombre = randint(1, 40)
score = 0
basic.showNumber(nombre)
basic.pause(2000)
basic.pause(1000)
