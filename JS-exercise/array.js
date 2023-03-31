
// Array.methods()

// pop()  for removing the last element
// push() for adding the last element
// shift() removes first element
// unshift() adds first element


// let numbers = [1,2,3,4,5,6,7,8]

//  let a = numbers.pop()

//  numbers.push(1)
 
//  let b = numbers.shift()
//  numbers.unshift(8)



// console.log(numbers)


let numbers = [1,2,3,4,5,6,7,8,9,10]

let evenNums = [];
let  oddNums =[] ;


for(let i = 0; i < numbers.length ; i++){
  

    if (numbers[i]%2 === 0){
        
        evenNums.push(numbers[i])
        }
        else{
            oddNums.push(numbers[i])
        }

   }
   console.log("Even Numbers")

   console.log(evenNums)

   console.log("Odd Numbers")
console.log(oddNums)
