// Warmup-1 --
// sleepIn

// The parameter weekday is true if it is a weekday, 
//  and the parameter vacation is true if we are on vacation.
//  We sleep in if it is not a weekday or we're on vacation. 
//  Return true if we sleep in.

// Examples
// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true
// sleepIn(false, false) → true

function sleepIn(weekday, vacation) {
    if (vacation) {
        return true;
    } else if (weekday) {
        return false;
    } else {
        return true;
    }
}
//TESTS
[
    { inputs: [true, true], expected: true },
    { inputs: [true, false], expected: false },
    { inputs: [false, true], expected: true },
    { inputs: [false, false], expected: true },
].forEach((test, i) => {
    console.log(i, sleepIn(...test.inputs) === test.expected ? "PASS" : "FAIL")
});