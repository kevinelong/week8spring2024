
function f(n){
    console.log(n)
    return n > 0
}

console.log( f(1) || f(-2) || f(-3) )

function greet(name){
    console.log(`Hello ${ name || 'world'}!`)
}
greet("Class")