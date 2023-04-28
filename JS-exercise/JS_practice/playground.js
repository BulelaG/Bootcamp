// LOOPING AN ARRAY OF OBJECTS

// let fullnames = [
//    {
//      name:"John",
//      lastname:"Doe"
//     },
//      {
//        name:"Jane",
//      lastname:"Doeee"  
//     },
//     {
//       name:"Peter",
//      lastname:"Parker"   
//     }
//     ]

//     for(l = 0; l <firstnames.length;l++){
//     console.log(firstnames[l])}
    
//     const firstnames = fullnames.map(person => person.name);
//     console.log(firstnames)

//     for (let person of fullnames){
//         console.log(person.lastname)
//     }

// ----------------------------------------------------

function copyArray(array1,array2,index){

// arrayCopy=array1.slice() 

array1.splice(index,0,...array2)

console.log(array1)
console.log(array2)

}
copyArray([1,2,3],[3,2,1],3)



