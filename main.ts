/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */
enum sv {
    A,
    B
}
/**
 * Provides access to BitBooster functionality.
 */
//% color="#AA278D"
namespace Booster {

    

    //% block="Servo $s angle = $angle"
    //% angle.min=0 angle.max=180 
    export function servoControl(s: sv, angle: number) {
        if (s == 1) {
            pins.servoWritePin(AnalogPin.P13, angle);
        } else {
            pins.servoWritePin(AnalogPin.P14, angle);
        }
    }

}
