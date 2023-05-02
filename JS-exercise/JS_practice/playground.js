// LOOPING AN ARRAY OF OBJECTS

// let fullnames = [
//    { name:"John", lastname:"Doe" },
//    { name:"Jane", lastname:"Doeee" },
//    {name:"Peter", lastname:"Parker" }]

//     for(l = 0; l <fullnames.length;l++){


//     console.log(fullnames[l].lastname)}
    
    // const firstnames = fullnames.map(person => person.name);
    // console.log(firstnames)

    // for (let person of fullnames){
    //     console.log(person.name)
    // }

// ---------------Spread oparator-------------------------------------

// function copyArray(array1,array2,index){
// // arrayCopy=array1.slice()
// array1.splice(index,0,...array2)
// console.log(array1)
// }

// copyArray([1,2,3],[3,2,1],1)

// -------------Spread oparator-------------------------
// let ar1 = [1,2,3]
// let ar2 = [9,11]
// let n = 1
// function copy(ar1,ar2,n){
// return [...ar1.slice(0,n), ...ar2, ...ar1.slice(n)]}
// console.log(copy(ar1,ar2,n))

// -------------------Reverse a String--------------------

// let str = "Bulela"
// let c= ""
// for(k = str.length-1; k >= 0; k-- ){
//   c = c + str[k]
 
// }
// console.log(c)

// function evenORodd(nums){

//   if(nums % 2 == 0){
//     return "Even"
//   }
//   else
//   {
//     return "Odd"
//   }
// }
// console.log(evenORodd(3))


// -------sort ascendingly -------

// let array = [1,1,2,3,-1]
// let array2 = array.sort((a,b)=>a-b)
// console.log(array2)

 // -------sort descendingly -------

// let array = [1,1,2,3,-1]
// let array2 = array.sort((a,b)=>b-a)
// console.log(array2)