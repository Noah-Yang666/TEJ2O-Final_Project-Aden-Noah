/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah and Aden
 * Created on: June 2026
 * This program operates a stop light
*/
// variable needed
let countdown: number = 22

// setting up
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// runs stoplight program
input.onButtonPressed(Button.A, function () {
    // turns on green pin
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(2000)
    basic.clearScreen()
    while (countdown >= 0) {
        basic.showNumber(countdown)
        countdown--
    }
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showIcon(IconNames.No)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(8000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
