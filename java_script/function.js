// Functions in javascript

console.log("hello");
"abc".toUpperCase();
[1, 2, 3].push(4);

function myFunction() {
    console.log("Welcome to apna college");
    console.log("We are learning js:");
}
myFunction();


// function myFunction(msg, n){  //input->parameter
//     console.log(msg * n);
// }
// myFunction("i love js", 100); //input->argument

function sum(x, y) {
    s = x + y;
    return s;
}
let val = sum(2, 5);
console.log(val);



// ****Arrow function(this is a morden js function)
// function of sum 
const arrowsum = (a, b) => {
    console.log(a + b);
};
arrowsum(7, 2);

// function of multiplication
const arrmlt = (a, b) => {
    console.log(a * b);
};
arrmlt(5, 4);
// const arrmlt1 = (a,b)=>{
//     return a * b;
// }
// arrmlt1(5,4);

// practice questions
// Q.1
function countvowels(str) {
    // "Apnacollege", count = 0
    let count = 0;
    for (const char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++;
        }
    }
    console.log(count);
}
countvowels("education");


// this is solved of arrow function
const counvow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++;
        }
    }
    return count;
}
counvow("education");

// forEach loop in array
let arr = ["pune", "delhi", "bihar", "mumbai"];

arr.forEach((val) => {
    console.log(val.toUpperCase());
});
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});


// practice Question
// Q.1 For a given array of numbers, print the square of each value using the forEach loop.
// let num = [2,3,4,5,6,7,8,9];
// num.forEach((num)=>{
//     console.log(num*num);
// });



// let square = (num)=>{
//     console.log(num*num);
// };
// num.forEach(square);


// ******Some More Array Methods******
// Map
let nums1 = [45, 67, 98];
nums1.map((val)=>{
    console.log(val);
})


// let nums = [45, 67, 98];
// let newarr = nums.map((val)=>{
//     return val * 2;
// })
// console.log(newarr);


// Filter
let arr1 = [1, 2, 3, 4, 5, 6];
let evenarr = arr1.filter((val)=>{
    // return val % 2 === 0; 
    return val > 3 ; 
})
console.log(evenarr);

// Reduce
let arr2 = [1, 2, 3, 4, 5, 6];
let output = arr2.reduce((res, curr)=>{
    // return res+curr;
    return res>curr ? res:curr;
})
console.log(output);
