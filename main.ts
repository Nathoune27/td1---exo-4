input.onButtonPressed(Button.A, function () {
    if (x == -1 && y > -1) {
        led.unplot(x, y)
        x += 5
        y += -1
        led.plot(x, y)
    } else if (x > -1 && y > -1) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x == 5 && y < 5) {
        led.unplot(x, y)
        x += -5
        y += 1
        led.plot(x, y)
    } else if (x < 5 && y < 5) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
