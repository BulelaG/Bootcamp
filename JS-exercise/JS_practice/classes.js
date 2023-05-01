class House {
    constructor(color) {
        this.color = color
    }

    getFurniture(){
        return "couch"
    }
}

const houseObject = new House("Red")
const houseObject2 = new House("Brown")

console.log(houseObject.color)
console.log(houseObject.getFurniture())



console.log(houseObject2.color)
console.log(houseObject2.getFurniture())




