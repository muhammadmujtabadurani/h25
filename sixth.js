let grade = prompt("Enter your grade");
let per =  parseInt(prompt("Enter your Percentage"))
 
// Turnary Operation//
let result = per === 90 && grade == "A" ||per === 80 && grade == "B" ||per === 70 && grade == "C" ? "Pass" : "Fail";
document.write(result);

