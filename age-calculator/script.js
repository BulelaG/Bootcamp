function calcAge(yb){

   let age = 2023 - yb

if(isNaN(yb)) return("Enter your birth year") 
else if( age >= 0) return age;
else if (age<0) return("Age can't be a negative number")




}
console.log(calcAge(2024))
