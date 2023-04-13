
// ------------Fahrenheits to Celcius-----------

function FahToCel(){
let F = Number(document.getElementById("Celcius").value)
let C = (F-32)*5/9

result = document.getElementById("result")
result.innerHTML = C


if(!F) result.innerHTML = ("Please enter a value.") 
 
else if(isNaN(F)) result.innerHTML =("Please enter a value") 

else if(C<-273.15) result.innerHTML =("It can not be this cold, that's an absolute zero") 

else if(C<16){
    result.innerHTML =(C+ "°" +" " + " " +"It's cold, you might want to carry a jacket")
}
else if(C<=21 && C>=16){
    result.innerHTML =(C+"°" + " " + " " +"It is warm, you could wear t-shirt and jeans.")
}
else if(C>21)
result.innerHTML =(C+ "°" +" " + " " +"It's a hot day, you can rock your shorts.")



}

// console.log(FahToCel(1))


// ------------ Celcius to Fahrenheits-----------

function CelToFah(){

let c = Number(document.getElementById("Fahrenheitz").value)
let F = (c*9/5 )+32 

result2 = document.getElementById("results")
result2.innerHTML = F

if(!c) result2.innerHTML =("Please enter a value")

else if(isNaN(c)) result2.innerHTML =("Please enter a value")

else if(F<-460) result2.innerHTML =("It can not be this cold ")

else if(F<16){ 
    result2.innerHTML =(F+"°"+" " +" " +"It's cold, you might want to carry a jacket")
}
else if(F<=21 && F>=16){
    result2.innerHTML =(F+"°" + " " +" " +"It is warm, you could wear t-shirt and jeans")
}
else if(F>21)
result2.innerHTML =(F+"°" +" " + " " +"It's a hot day, you can rock your shorts.")
}


