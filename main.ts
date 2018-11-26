/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */
enum sv {
    A=0,
    B=1
}

enum dir{
    Rev=0,
    Fwd=1
}
/**
 * Provides access to BitBooster functionality.
 */
//% color="#AA278D"
namespace Booster {

    //% block="Servo $s angle = $angle"
    //% angle.min=0 angle.max=180 
    export function servoControl(s: sv, angle: number) {
        if (s == 0) {
            pins.servoWritePin(AnalogPin.P13, angle);
        } else {
            pins.servoWritePin(AnalogPin.P14, angle);
        }
    }

    //% block="Motor $m Direction $d Speed $sp"
    //% sp.min=0 sp.max=1024
    export function motorControl(m: sv, d: dir, sp: number){
        if(m==0){
            pins.digitalWritePin(DigitalPin.P8, d)
            pins.analogWritePin(AnalogPin.P15, sp)
            
        } else{
            pins.digitalWritePin(DigitalPin.P1, d)
            pins.analogWritePin(AnalogPin.P16, sp)          
        }
    }

}
