
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


// Manipulating Arrays with Array Methods 
// create array with even and odd number
// create two empty arrays
// take even numbers put them in 1 array
// take odd numbers put them in 1 array
// return the two arrays




// let numbers = [1,2,3,4,5,6,7,8,9,10]

// let evenNums = [];
// let  oddNums =[] ;


// for(let i = 0; i < numbers.length ; i++){
  

//     if (numbers[i]%2 === 0){
        
//         evenNums.push(numbers[i])
//         }
//         else{
//             oddNums.push(numbers[i])
//         }

//    }
//    console.log("Even Numbers")

//    console.log(evenNums)

//    console.log("Odd Numbers")
// console.log(oddNums)

//-------------------------------- SORTING ALPHABETS

// let rnames = ["a","l","c","k","e","i","k","x"]

// rnames.sort()

// console.log(rnames)


// // -------------------------------SORT NUMBERS-------------------------------------

// let rnumbers = [22,-1,20,-100,88,8,90]

// rnumbers.sort()

// console.log(rnumbers)



// ----------------------------SORT NUMBERS USING ARROW FUNCTION----------------ASCENDING-----------------------------


// let rnumbers = [22,-1,20,-100,88,8,90]
// rnumbers.sort((b,c)=> b-c)


// let minNumber = rnumbers[0] 
// let maxNumber = rnumbers[rnumbers.length-1]
// // // rnumbers.min()

// console.log(rnumbers)


// rnumbers.sort((b,c)=> b-c)

// console.log(minNumber)
// console.log(maxNumber)


// --------------------------Function for getting a max and min of a list of numbers-----------------

// function MaxAndMin(numbers){

// let obj = [];
// numbers.sort((a,b) => a-b)
// obj['minNumber'] = numbers[0]
// obj['maxNumber'] = numbers[numbers.length-1]
//   return obj //  console.log(obj)     

// }

// MaxAndMin([1,3,-7,11,80])

// let firstApp = MaxAndMin([1,3,-7,11,80])

// console.log(firstApp)


// ----------------------Reversing A String using methods------------------------


// let myName = "Holomi"

// let splitName = myName.split("")

// let  reversedName = splitName.reverse()

// let joinedName = reversedName.join("")

// console.log(joinedName)
// }

// ReversedName()


// USING CHAINED METHODS  TO REVERSE A STRING 

// let myName = "BULELA"
// ReversedName = myName.split("").reverse().join("")
// console.log(ReversedName)

// USING LOOPS TO REVERSE A STRING

// let myName = "BULELA"

// let ReversedName = "";

// for (let i = 0; i <= myName.length - 1;  i++){ 
//      ReversedName = myName[i] + ReversedName;}    
 
// // ReversedName = myName.split("").reverse().join("")

// console.log(ReversedName)


//---------------------REVERSE STRING FUNCTION------------------------------------------------

// function strReversed(text){
//     let reversed = ''
//     for(i=0;i<text.length;i++){
// reversed = text[i]+reversed
//     }
//     console.log(reversed)
// }

// strReversed('I am testing')
// strReversed('JS is super easy')

// ----------------------------Salary calculator function-----------------------------

// function CalculateSalary( hr,hrs,dys,prcntg=1.2 ){

// salary = hr * hrs *dys

// let SalaryIncrease =  hr * hrs *dys *prcntg

// console.log(salary)

// console.log(SalaryIncrease)
// return salary


// }
// CalculateSalary(3,3,3)

// // ------------EMAIL GENERATOR ---------------

// function EmailGen(fname ="John" , lname ="Doe"){
// return fname+"." +lname + "@gsb.co.za"
// }
// console.log(EmailGen())



// function EmailGen(fname,lname){
//     let email = fname+ lname + "@gsb.co.za"
//         return email.toLowerCase()          // string method to turn text to lowercase           
//     }
// console.log(EmailGen("Bulela","Gomoshe"))


// let num1 = [1,3,5,9]
// let num2 = [0,2,4,6]
//  let num3 = [num1,num2]   // spread oparator

// let num4 = num1.concat(num2)
// num3.sort((a,b)=>b-a)

// console.log("This is nums", num3)

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)



