// this is ex-10 and tutorial 64
// adjective:
// crazy ,amazing, fire

// shope name:
// engine, foods, garments

// another word:
// Bros, limited, hub

let rand = Math.random()
let first, second, third;
// 0, 0.33, 0.66, 1

// lets genret the first word
if(rand<0.33){
    first = "crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "amazing"
}
else{
    first = "fire"
}

// lets generate the second word
if(rand<0.33){
    second = "bros"
}
else if(rand<0.66 && rand>=0.33){
    second = "limited"
}
else{
    second = "hub"
}
// lets generate the other word
if(rand<0.66){
    third = "engine"
}
else if(rand<0.66 && rand>=1){
    third = "foods"
}
else{
    third = "garments"
}

console.log(`${first} ${second} ${third}`);
