// the change in the state of an object is known as an event.
// mouse events(click, double click etc.)
// keyboard events, form events, print event & many more

let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt)=>{
    console.log(evt);
 console.log(evt.type);
 console.log(evt.target);
 console.log(evt.clientX, evt.clientY);
}
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("btn1 was clicked");
//     let a = 25;
//  a++;
//  console.log(a);
// }

let div = document.querySelector("div");
div.onmouseover = ()=>{
    console.log("you are inside div");
}