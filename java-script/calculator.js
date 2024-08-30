// this is tutorial 59
// creat a faulty calculator using javascript

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    // perform correct calculation
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // perform wrong calculation
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}