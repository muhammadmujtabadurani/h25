let myData = {
    name : "Peter",
    city : "karach",
    age :"54",
    salary :1000,
    grade : "C"
};


// Two methods of getting data from an object
// first Method

console.log(myData["city"]);
console.log(myData["age"]);


// second method
console.log(myData.salary);
console.log(myData.grade);
console.log(myData);


// getting data with using loop 

for(let i in myData){
    console.log(i , myData[i]);
}

// Arthimetic operators

let a = 45;
let b = 75;

console.log("the sum of a+b is :", a+b);
console.log("the sub of a-b is :", a-b);
console.log("the mul of a*b is :", a*b);
console.log("the / of div is :", a/b);
console.log("the modulus of a%b is :", a%b);


// logical operators
console.log(true || true);
console.log(true || false);
console.log(true || false);
console.log(false || false);

console.log("End Operator");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Comparision
// > Greater than
// < less Than
// >= Greater than equal to
// <= less than equal to

// == it means equal
// === equal with type Check

// incrment

let q = 70;
q+=10;
console.log(q);
//post increment
console.log(q+1); // q = q+1 70 +1=>71
console.log(q); // 71

// pre Increment

console.log(++q); // ++q 71 +1

// post decrement
let d = 30;
console.log(d--);
console.log(d);
// foe pre-Decrement
console.log(--d);