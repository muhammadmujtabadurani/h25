// Array Collection of Data 

let heroes =  ["Supra","Corolla","Civic","Bugatti","Agera"]
console.log(heroes);
console.log(heroes[3]); //To print any element 

// Array Methods
// Last index me add kerta ha
console.log(heroes.push("Lamborghini"));
console.log(heroes);
console.log(heroes.length);

// Last index Element ko remove kerta he
console.log(heroes.pop());
console.log(heroes);

// Shift index ke first element ko remove kerta
console.log(heroes.shift());
console.log(heroes);

// UnShift index main aik first element add kerta he
console.log(heroes.unshift("Alto"));
console.log(heroes);

// Slice bech main se array cut kerta he aur print kerta he
console.log(heroes.slice(1,2));

// Splice phela index kis element ko target kerna he wo btata hai//
console.log();


let bbq = ["TIKKA","SEEKH KABAB","CHARGA","MALAI BOTI"];
let seaFood = ["Fish","prawns","lobster"];
let sweetdish = ["CUSTARD","icecream","Gulab gamun","halwa"];

let menu = bbq.concat(seaFood , sweetdish);
console.log(menu);