function calcAge(){

let yb = Number(document.getElementById("year-born").value)
let age = 2023 - yb

if(!yb) alert("Enter your birth year") 
else if( age >= 0) alert(age);
else if (age<0) alert("Age can't be a negative number")
  
}
console.log(calcAge(2024))