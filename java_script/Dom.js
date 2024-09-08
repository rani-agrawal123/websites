// console.log("hello");
// alert("hey");
// console.log(window);
// console.dir(document);
// console.dir(document.body.childNodes[1]);
// // document.body.style.background = "green";
// // document.body.childNodes[3].innerText = "abc";

// // selection with id
// let heading = document.getElementById("element"); //h1
// console.dir(heading);

// // selection with class ( return html collection)
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);

// let firstEl = document.querySelector("p");//1st element
// console.dir(firstEl);
// let allEl = document.querySelectorAll("p");//1st element
// console.dir(allEl);


// // let firEl = document.querySelectorAll("#myId");//1st element
// // console.dir(firEl);
// // ***Dom text(text nodes, comment node , element node)//first child, last child, children;
// console.dir(document.body.firstChild);
// // document.querySelector("div").children;


// let div = document.querySelector("div");
// console.dir(div); //div.innerText, inner html
// let heading = document.querySelector("h1");



// lecture --2

// let div  = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("list");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// // console.log(para.setAttribute("class","hello"));

// let box = documnet.queryselector("box");
// div.style.backgroundColor = "green";
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);


// let div = document.querySelector("div");
// div.append(newBtn);
// let div = document.querySelector("div");
// div.prepend(newBtn);
// let div = document.querySelector("div");
// div.before(newBtn);
let p = document.querySelector("p");
p.after(newBtn);
 
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi, i am new!</i>";
document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// append child, remove child


// practice question
// Q.1creat a new button element. Give it a text"click me", background color of red & text color of white.
// ...insert the button as the first element inside the body tag.
let newBtn1 = document.createElement("button");
newBtn1.innerText = "Click me";

newBtn1.style.color = "white";
newBtn1.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn1);





