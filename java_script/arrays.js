// Arrays in js (collection of items)
// let mark1 = 98;
// let mark2 = 49;
 
// strings are immutable(can't change this index value ) but array is  mutable/////
let marks = [92, 54, 69, 87, 64, 67, 98];
console.log(marks.length);

let number = [2, 10, 4, 5,5, 9, 7];
number[4] = 95;
console.log(number);
console.log(typeof number);
console.log(number[5])

let name = ["rani", "harsh", "ravi", "neha", "ankit", "sonam", "raj"];
for(let i=0; i<name.length; i++){
    console.log(name[i]);
}

// for of
for(element of name){
    console.log(element);
}

let cities = ["delhi", "bhopal", "hydrabad", "gurgaon", "punjab"];
for(let city of cities){
    console.log(city.toUpperCase());
}



// practice question
// Q.1 For the given array with marks of student [85, 97, 44, 37, 75, 60] find the average marks of the entire class.
let student_marks = [85, 97, 44, 37, 75, 60];
let sum = 0;
for(let value of student_marks){
    sum += value;
}
let avg = sum/student_marks.length;
console.log(sum);
console.log(`avg marks of the clss = ${avg}`);


// Q.2 
let item = [250, 645, 300, 900, 50];
let i = 0;
for(let value of item){
    let offer = value/10;
    item[i] = item[i] - offer;
    console.log(`value at index ${i} = ${value}`);
    console.log(` value after offer ${item[i]}`);
    i++;
}

for(let i=0; i<item.length; i++){
    let offer = item[i] / 10;
    item[i] -= offer;
}
console.log(item);


// array methods //
// push():add to end,  pop():delete from end & return,  to string(): convert array to string
let food = ["potato", "papaya", "banana", "tomato", "apple"];
// food.push("chips")
// console.log(food);
// food.pop()
console.log(food);
console.log(food.toString());

// concat():joins multiple arrays & returns result
// unshift:add to start,  shift():delete from start & return
 
let marvel_heroes = ["thor", "spiderman", "ironman", "superman", "powerman"];
let man = ["raj", "ravi", "satya"];

console.log(marvel_heroes.concat(man));
// man.unshift("ram");
// console.log(man);
man.shift();
console.log(man);

// slice
console.log(marvel_heroes.slice(1,4));

// splice(): change original array (add, remove, replace).
let arr = [1, 2, 3, 4, 5, 6, 7, 8, ];
arr.splice(4,3,101,102,103,104)
console.log(arr);

// add Element
// arr.splice(2, 0, 101);

// Delete Element
// arr.splice(3,1);

// Replace Element
// arr.splice(3,1,109);



// practice Questions
// Q.1 creat an array to store companies["bloomberg", "microsoft", "uber", "google", "IBM", "Netflix"]
// remove the first company from the array
// Remove uber & Add Ola in its place
// Add Amazon at the end

let companies = ["bloomberg", "microsoft", "uber", "google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);