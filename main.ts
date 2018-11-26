/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */

/**
 * Provides access to BitBooster functionality.
 */
//% color="#AA278D"
namespace booster {

    enum Sv {
        A = 1,
        B = 2,
        //% blockId="ApB" block="A+B"
        AB = 3,
    }

    //% block="Servo $s angle = $angle"
    //% angle.min=0 angle.max=180  
    export function servoControl(s: string, angle: number) {
        if (s == "A") {
            pins.servoWritePin(AnalogPin.P13, angle);
        } else {
            pins.servoWritePin(AnalogPin.P14, angle);
        }
    }

}
