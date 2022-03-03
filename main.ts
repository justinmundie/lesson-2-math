input.onButtonPressed(Button.A, function () {
    Chosen_Number += 1
    basic.showNumber(Chosen_Number)
})
input.onGesture(Gesture.TiltLeft, function () {
    Chosen_Number = 0
})
input.onButtonPressed(Button.AB, function () {
    a = Chosen_Number + 9
    b = Chosen_Number - 9
    c = Chosen_Number * 2
    d = Chosen_Number / 3
    e = Chosen_Number % 4
    f = Math.sqrt(Chosen_Number)
    g = Math.round(3 / 4)
    h = Math.ceil(3 / 9)
    I = Chosen_Number ** 3
    j = randint(0, 100)
})
input.onButtonPressed(Button.B, function () {
    Chosen_Number += -1
    basic.showNumber(Chosen_Number)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(a)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(b)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(c)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(d)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(e)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(f)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(g)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(h)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(I)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(j)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    Chosen_Number = 0
})
let j = 0
let I = 0
let h = 0
let g = 0
let f = 0
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
let Chosen_Number = 0
Chosen_Number = 0
