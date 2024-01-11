let age = 10;

if(age>=20){
    console.log("you can cast your vote!");

}if(age<=20){
    console.log("you can't cast your vote");

}


if(age>=20){
    console.log("you can cast your vote!");
}else{
    console.log("you can't cast your vote");
}

let mode = prompt(`Enter Your Mode
1)Dark
2)Light
`);
let color;
if(mode ==="Dark"){
    color="Black"
}if(mode ==="Light"){
    color="light"
}

console.log("You Choose the Color ", color);