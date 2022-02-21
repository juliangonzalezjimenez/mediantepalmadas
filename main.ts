let motor = false
input.onSound(DetectedSound.Loud, function () {
    motor = !(motor)
    if (motor) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
basic.forever(function () {
	
})
