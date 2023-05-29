// total of 8 function for 15 tests

function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}

function increment(n) {
    return (n +=1)
    //return n++ was one under as if that last evaluation didn't happen could fix it with ++n but course notes said this was preferred
}

function decrement(n) {
    return (n -= 1)
    //return n-- was one over  
}

function makeInt(n) {
   return parseInt(n, 10)
}
function preserveDecimal(n) {
    return parseFloat(n)
}