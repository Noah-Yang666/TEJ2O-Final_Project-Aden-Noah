3/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah and Aden
 * Created on: June 2026
 * This program operates a stop light
*/

// radio part
radio.setGroup(67)

// variables needed
let countdown: number = 9

// setting up
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// sending the message
input.onButtonPressed(Button.A, function () {
    radio.sendString("START")
})

// runs stoplight program if message is transmitted
radio.onReceivedString( function (receivedString) {

    // if statement for message
    if (receivedString == "Start") {

    // turns on green LED
    pins.digitalWritePin(DigitalPin.P14, 1)
    
    // microbit displays
    basic.showIcon(IconNames.StickFigure)
    basic.pause(3000)
    basic.clearScreen()
    while (countdown >= 0) {
        basic.showNumber(countdown)
        countdown--
        basic.pause(800)
    }
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turns on yellow LED
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showIcon(IconNames.No)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turns on red LED
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(5000)

    // cleaning up
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    }
})
