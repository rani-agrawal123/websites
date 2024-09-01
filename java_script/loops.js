// loops in js
// For Loop (initilize, stopping cond., updation)

// for(let i = 1; i <= 100; i++){ 
//     console.log("apna college");
// }

// calculate sum of 1 to 5
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum = sum+i
// }
// console.log(sum);

// let sum1 = 0;
// let n = 7;
// for(let i=1; i<=n; i++){
//     sum1 = sum1+i
// }
// console.log(sum1);

// ****while loop****
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// ****Do-While loops****
// let i = 20;
// do {
//     console.log(i);
//     i++;
// } while (i <= 40);


// ****for-of loop****
// for(let variable of string)
// let str = "apna college";
// for (let i of str) {  //itrator->characters
//     console.log(i);
// }
// console.log(str.length);


// ****for-in loop****
// for(let key in objvar)
let student = {
    name: "rahul kumar",
    age: 20,
    class: 7,
    ispass: true
};
for (let i in student) {
    console.log(i, student[i]);
}

// practice
// Q.1 pirnt all even number from 0 to 100.
// for(let num=0; num<=100; num++){
//    if(num%2===0 ){
//     console.log(num);
//    }
// }

// Q.2
// let gamenum = 30;
// let usernum = prompt("Guess the correct number:");

// while(usernum != gamenum){
//     if(usernum<gamenum){
//         usernum = prompt("this num is less then to correct num");
//     }
//     else{
//         usernum = prompt("this num is greater then to correct num");
//     }
// }
// console.log("congratulation, you entered the right number");





// ******* String in js *******
let str = "apna college";
console.log(str);
console.log(str.length);
console.log(str[3]);

// Template Literals
let sentence = `hello`;
console.log(sentence);

let obj = {
    item:"pen",
    price:10,
};
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
console.log("apna \n college");
console.log("apna \t college");


// String Methods in js
let a = "apnacollege";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim()); //remove start and end blanck space
console.log(a.slice(3,6));
console.log(a.slice(3));

let str1 = "hello";
let str2 = "college";
console.log(str1.concat(str2));
console.log(str1.replace("ll", "pp"));
console.log(str2.charAt(4));

// Practice question
let fullname = prompt("enter your full name without spaces");

let username = "@" + fullname + fullname.length;
console.log(username);


