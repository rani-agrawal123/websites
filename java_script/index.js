console.log("hello");

// varialbles in js this is dynamic type
name = "tony stark";
// age = 24;
price = 50.50;
x = null;
y = undefined;
follow = true;
console.log(follow);

// var age  = 24;
// var age = 34;
// console.log(age);

let age = 78;
age = 23;
console.log(age);

const age1 = 56;
console.log(age1);

// data types in js (this is two types primitive and none primitive)

// Number, String, boolean, undefiend, null, bigint, symbol(primitive data type)
// none primitive data type (objects(arrays, function))
name = "tony stark";
// age = 24;
price = 50.50;
x = null;
y = undefined;
follow = true;
console.log(follow);
console.log(typeof follow)

// objects
const student = {
    name : "rahul  kumar",
    age  : 25,
    marks:8.2,
    ispass:true
};
 student["age"] = student["age"] +1;
 student["name"] = "rahul sharma";
console.log(student);
console.log(student.age);

// ***practice questions
// Q.1 creat a const object called "product" to store info..
const product ={
    title:"Ball pen",
    rating:4,
    offer:5,
    price:280
};
console.log(product);

// Q.2 creat a const obj. called "profile" to  store information.
const profile = {
    name :"rani",
    follower:345,
    following:245,
    post:87,
    isfollow:false
}
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.post);