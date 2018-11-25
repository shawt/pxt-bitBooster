basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

/**
 * Functions are mapped to blocks using various macros 
 * in comments starting with % (e.g., //% block).
 * The most important macro "block" specifies that a
 * block should be generated for a **exported** function.
 */
//% color="#AA278D"
namespace bitbooster {
    /**
    * Get the word field editor
    * @param word eg: Hello
    */
    //% blockId=wordPicker block="$word"
    //% blockHidden=false
    //% colorSecondary="#FFFFFF"
    //% word.fieldEditor="textdropdown" word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values=AB
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

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function dcMotor() {

    }

    //% block
    export function grove() {

    }
}
