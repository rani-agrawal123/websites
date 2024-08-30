// this is loops tutorial
// let a = 1;
// console.log(a+1);
// console.log(a+2);
console.log("this is loops tutorial");


// for(let i = 0; i<100; i++){
//     console.log(i);
// }


// for in loop
// let obj = {
//     name:"harry",
//     role:"programmer",
//     code:"CWH"
// }
// for (let key in obj) {
//     console.log(key, obj[key])
// }

// // for of loop
// for (let c of "harry"){
//     console.log(c)
// }

// while loop

// let i = 0;
// while(i<6){
//     console.log(i)
//     i++;
// }

// do while loop
let i = 10;
do{
    console.log(i)
    i++;
}while(i<6);




// 58

// function nice(name){
//     console.log("hey " + name + " you are nice")
//     console.log("hey " + name + " you are nice");
//     console.log("hey " + name + " you are good");
//     console.log("hey " + name + " your tshirt is nice");
//     console.log("hey " + name + " you are the best teacher");
// }
// nice("rohan")
// nice("shivam")



function sum(a, b){
    console.log(a+b)
}

sum(3, 5)


function sum(a, b){
    return a + b
}
 result = sum(3, 5)
 console.log("the sum of these numbers is:", result)




const fun1 = (x)=>{
    console.log("I am an arrow function", x)
}

fun1(34);
fun1(78);
fun1(73);




function onePluseAvg(x,y){
    console.log("done")
    return 1 + (x+y)/2
}

let a = 2;
let b = 3;
let c = 4;

console.log("one pluse avg is a and b", onePluseAvg(a,b));
console.log("one pluse avg is a and c", onePluseAvg(a,c));
console.log("one pluse avg is c and b", onePluseAvg(c,b));

const add = (p,q)=>{
return(p+q)
}
console.log(add(3,5));