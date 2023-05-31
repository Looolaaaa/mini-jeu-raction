input.onButtonPressed(Button.A, function () {
    if (nombre % 4 == 0) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(score + 1)
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("perdu")
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (nombre % 4 != 0) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(score + 1)
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("perdu")
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
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
nombre = randint(1, 40)
basic.showNumber(nombre)
basic.pause(2000)
basic.pause(1000)
