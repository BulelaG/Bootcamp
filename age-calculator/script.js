function calcAge(){

let yb = document.getElementById("year-born").value
let age = 2023 - yb
let results = document.getElementById("results")
results.innerHTML = age



if(!yb) results.innerHTML =("Enter your birth year") 
else if (age<0){ results.innerHTML =("Age can't be a negative number")}
else if(yb < 0){ results.innerHTML =("Year can't be a negative number")}
else if ( age >= 0){results.innerHTML =(age)}
  
}
