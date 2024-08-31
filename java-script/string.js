// console.log("this is string tutorial");
// let a = "harry";
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[5]);
// console.log(a.length);

// let _name = "harry";
// let friend = "rohan";
// console.log("His name is " + _name +" and his friend is " + friend);
// console.log(`His name is ${_name} and his friend is ${friend}`);
// console.log(friend.toUpperCase());

// let b = "shivam";
// console.log(b.toUpperCase());
// console.log(b.toLowerCase());
// console.log(b.slice(1,4));
// console.log(b.replace("sh","77"));
// console.log(b.concat(a," arav"));



// this is tutorial 63  array
let arr = [1, 2, 3, 4, 5, 6, 7,];
console.log(arr);
console.log(arr.length)
console.log(arr[0])
arr[1] = 55

console.log(arr)
console.log(typeof arr);
console.log(arr.toString());
console.log(arr.join(" and "));

arr.pop() //remove last element
console.log(arr);

arr.push("good")
console.log(arr);

arr.shift() //remove first element
console.log(arr)

arr.unshift("nice")
console.log(arr);

delete arr[4]
console.log(arr)


a1 = [1, 2, 3, 4]
a2 = [5, 6, 7, 8]
a3 = [9, 2, 3, 6]

console.log(a1.concat(a2,a3));
console.log(a1.concat(a2,a3).length);

let arr1 = [1, 2, 3, 4, 5, 6, 7,];
console.log(arr1.splice(1,3));
// console.log(arr1.splice(2,3));
console.log(arr1.slice(1,3));


let a = [1, 92, 33, 4, 55]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//      console.log(element);
// }

// a.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// });

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
//     }
// }

// for (const value of a) {
//     console.log(value)
// }


// let a = [1, 9, 3, 4, 15]
// let newArr = []
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newArr.push(element**2)
// }
// console.log(newArr);


let newArr = a.map((e)=>{
    return e**2
})
console.log(newArr);


const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(a.filter(greaterThanSeven));


let arr2 = [1, 9, 3, 4, 15]
const red = (a, b)=>{
    return a+b
}
console.log(arr2.reduce(red));

console.log(Array.from("harry"));