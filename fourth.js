// loops //
// for(let i=0; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }


// let num = prompt("Enter Your Number");
// for(let i=1; i<=10; i++){
//     console.log(`{num} x ${i} = ${num*i}`);
// }

// // STRING INTERPOlation //
// for(let i=0; i<=10; i++){
// //     console.log(`the value of i is ${i}`);
// // }

// // while loop// 

// let myNum = 80;
// while(myNum<=84){
//     console.log("this is while loop",myNum);
//     myNum++;
// }

// let z = 44;
// do {
//     console.log("this is do while loop" ,z );
//     z++;
// }while ("")

// let gameNum = 95;
// let userNum = prompt("Enter Your Number");
// while(userNum != gameNum){
//     userNum = prompt("you guess the wrong number : Guess Again")

// }
// swal("You WIN THE MATCH")

let obj = {
    name :"farhan",
    age : "29",
    grade : "A",
    city : "Krachi",
    number : 123
}


for(let n in obj){
    console.log(n , obj[n]);
}