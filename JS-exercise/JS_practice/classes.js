class House {                      //creating a house class
    constructor(color) {               //constructing the house class 
        this.color = color
    }

    getFurniture(){                    
        return "couch"               //adding a function to the house class
    }
}

const houseObject = new House("Red")              // an object using the class
const houseObject2 = new House("Brown")

console.log(houseObject.color)                  //console logging the objects features/properties
console.log(houseObject.getFurniture())



console.log(houseObject2.color)
console.log(houseObject2.getFurniture())


//-------Object Distructuring------


const person1 ={
    fname : "Khalid",
    age: 30,
    adress:{
    city: "CPT",
    province: "Western Cape" 
}
}
const person2 = {
    age: 22,
    favouriteFood: "Strawberry"
}

const person3 = {...person1, ...person2}

console.log(person3)
