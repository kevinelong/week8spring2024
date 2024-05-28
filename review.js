
a = 4
b = 5
if (a == b) {
    //if both are equall
}
//NOT STRICTLY EQUALL? (including type)
x = "1"
y = 1
// console.log( x !== y )

//in range inclusive
function isInRange(n) {
    if (n >= 64 && n <= 128) {
        console.log("IS IN RANGE")
    } else {
        console.log("Not in range")
    }
}
// isInRange(63)
// isInRange(64)
// isInRange(128)
// isInRange(129)
function isGood(fruit){
    switch (fruit) {
        case "apple":
        case "cherry":
        case "banana":
            console.log("Good for pie!");
            break;
        case "tomato":
            console.log("NOT! Good for pie.");
            break;    
        default:
            console.log("Unknown goodness")
            break;
    }
}
// isGood("durian")

// % MODULUS/remainder  4/3
console.log(3221234133 % 2)

function isOdd(n){
    return n % 2 === 1
}
console.log(isOdd(8))

let total = 0;
function doit(n){
    let total = n * 12;
    return total;
}
function display(){
    console.log(total)
}
total = doit(10);
total = doit(12);
display();

