// operators in js
// ****Arithmetic Operators(+,*,-,/,)****

let a = 5;
let b = 3;
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);

// modulus, Exponentiation, Increment, Decrement
// console.log("a%b = ", a%b); //modulus
// console.log("a**b = ", a**b); //Exponentiation

// unary operators
// a++;
// b--;
// console.log("a++ = ", a++); //Increment
// console.log(a)
// console.log("b-- = ", b); //Decrement
// console.log("b-- = ", --b); 



// ***Assignment Operators***
// =, +=, *=, -=, **=
// let p = 5;
// let q = 7;
// p += 4; //a = a+4
// console.log(p)
// q -= 3; //q = q-3
// console.log(q)
// q *= 2; //q = q*2
// console.log(q)
// q /= 2; //q = q/2
// console.log(q)
// q **= 3; //q = q**3
// console.log(q)


// ****comparision operator****
// Equal to(==), Equal to & type(===), not equal to(!=), not quual to & type(!==)
// always its return to  boolean values
// let s = 6;
// let t = 4;
// let u = "6";
// console.log(s==t);
// console.log(s!=t);
// console.log(s==u);
// console.log(s===u);
// console.log(s!==u);

// // >, >=, <, <=
// console.log(s>t);
// console.log(s>=u);
// console.log(s<t);
// console.log(u<=t);


// *****logical operators*****
// logical AND(&&), logical OR(||), logical NOT(!)
//  let x = 6;
//  let y = 4;
// //  let cond1 = x>y; //true
// // //  let cond2 = x===6; //true
// //  let cond2 = x===y; //false
// //  console.log(cond1 && cond2);
//  console.log(x>y && x==5);
//  console.log(x<y || y==4);
// //  ! true ->false, false->true
// console.log(!(x>y));



// *****{this is condition statements}*******
// if else statement*****

// let age = 18;
// if(age>=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can not vote");
// }


// let mode = "green";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// else{
//     color = "red";
// }
// console.log(color);


// let num = 22;
// if(num%2===0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
// // syntax->rules


// else-if statement*******
// let age = 63;
// if (age<18){
//     console.log("your are junior");
// }
// else if(age>60){
//     console.log("you are senior citizen");
// }
// else{
//     console.log("you are middle");
// }


// Ternary Operator
let age = 42;
let result = age >= 18 ? "adult" : "not adult"; //simple, compact if-else
console.log(result);
age >= 18 ? console.log("adult") : console.log("not adult");




// practice Question 
// Q.1 Get user to input a number using prompt("Enter a number:").check if the number is a multiple of 5 or not
// alert("hello");//one time popup
// let num = prompt("Enter a number");
// if(num % 5 ===0){
//     console.log("number is multiple of 5");
// }
// else{
//     console.log("number is not multiple of 5");
// }

// Q.2
let num = 60;
if(num>=80 && num<=100){
    console.log("grade A");
}
else if(num>=70 && num<=79){
    console.log("grade B");
}
else if(num>=60 && num<=69){
    console.log("grade C");
}
else if(num>=50 && num<=59){
    console.log("grade D");
}
else if(num<=49 && num>0){
    console.log("grade E");
}
else{
    console.log("grade F");
}

// let score = prompt("enter your number");
// let grade;
// if(num>=80 && num<=100){
//     grade = "A"
// }
// else{
//    grade = "B"
// }
// console.log(grade);