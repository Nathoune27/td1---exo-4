input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    if (x == -1 && y == 0) {
        x = 4
        y = 4
    } else if (x == -1 && y > 0) {
        x = 4
        y += -1
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    if (x == 5 && y == 4) {
        x = 0
        y = 0
    } else if (x == 5 && y < 4) {
        x = 0
        y += 1
    }
    led.plot(x, y)
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
