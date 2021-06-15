let avstand = 0
bitbot.select_model(BBModel.XL)
bitbot.setBitNose(0xFF0000)
bitbot.setBitEye(bfEyes.Left, 0x18E600)
bitbot.setBitMouth(bfMouth.Smile, 0xFF0000)
basic.forever(function () {
    avstand = bitbot.sonar(BBPingUnit.Centimeters)
    if (avstand == 15) {
        bitbot.setLedColor(0xFF0000)
        bitbot.rotatems(BBRobotDirection.Left, 30, 800)
    } else if (avstand > 15) {
        bitbot.setLedColor(0x18E600)
        bitbot.go(BBDirection.Forward, 60)
    }
})
