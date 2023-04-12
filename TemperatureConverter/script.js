// function TempConverter(F,C){

// console.log(TempConverter())



// ------------Fahrenheits to Celcius-----------

function FahToCel(){
let F = Number(document.getElementById("Celcius").value)


let C = (F-32)*5/9

if(!F) alert("Please enter a value.") 

else if(isNaN(F)) alert("Please enter a value") 

else if(C<16){
    alert(C+ "°" +" " + " " +"It's cold, you might want to carry a jacket")
}
else if(C>=21 && 16<=C){
    alert(C+"°" + " " + " " +"It is warm, you could wear t-shirt and jeans.")
}
else(C>21)
    alert(C+ "°" +" " + " " +"It's a hot day, you can rock your shorts.")



}

// console.log(FahToCel(1))


// ------------Fahrenheits to Celcius-----------

function CelToFah(){
let c = Number(document.getElementById("Fahrenheitz").value)
let F = (c*9/5 )+32 
// console.log(F)
if(!c) alert("Please enter a value") 
else if(isNaN(c)) alert("Please enter a value") 
else if(F<16){ 
    alert(F+"°"+" " +" " +"It's cold, you might want to carry a jacket")
}
else if(F<=21 && 16>=F){
    alert(F+"°" + " " +" " +"It is warm, you could wear t-shirt and jeans")
}
else
    alert(F+"°" +" " + " " +"It's a hot day, you can rock your shorts.")
}

console.log(CelToFah(-8))

