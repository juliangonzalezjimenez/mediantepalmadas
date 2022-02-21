input.onSound(DetectedSound.Loud, function () {
    motor = !(motor)
    if (motor) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 140)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
let motor = false
input.setSoundThreshold(SoundThreshold.Loud, 180)
basic.forever(function () {
	
})
