/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */
//% color="#AA278D"
namespace booster {

   /**
     * Custom text dropdown
     */

    /**
      * Get the word field editor
      * @param word eg: Hello
      */
    //% blockId=wordPicker block="$word"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% word.fieldEditor="textdropdown" word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='[["Hi"], ["How are you?"]]'
    export function __wordPicker(word: string): string {
        return word;
    }

    //% block="Servo $s angle = $angle"
    //% s.shadow="wordPicker"
    //% angle.min=0 angle.max=180  
    export function servoControl(s: string, angle: number) {
        if (s == "A") {
            pins.servoWritePin(AnalogPin.P13, angle);
        } else {
            pins.servoWritePin(AnalogPin.P14, angle);
        }
    }

}
