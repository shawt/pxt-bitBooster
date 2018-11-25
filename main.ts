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
    //% block
    export function servoControl() {

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
