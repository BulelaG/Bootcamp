// LOOPING AN ARRAY OF OBJECTS

// let fullnames = [
//    { name:"John", lastname:"Doe" },
//    { name:"Jane", lastname:"Doeee" },
//    {name:"Peter", lastname:"Parker" }]

//     for(l = 0; l <firstnames.length;l++){
//     console.log(firstnames[l])}
    
//     const firstnames = fullnames.map(person => person.name);
//     console.log(firstnames)

//     for (let person of fullnames){
//         console.log(person.lastname)
//     }

// ---------------Spread oparator-------------------------------------

// function copyArray(array1,array2,index){
// arrayCopy=array1.slice()
// array1.splice(index,0,...array2)
// console.log(array1)
// console.log(array2)}
// copyArray([1,2,3],[3,2,1],1)

// -------------Spread oparator-------------------------
// let ar1 = [1,2,3]
// let ar2 = [9,11]
// let n = 1
// function copy(ar1,ar2,n){
// return [...ar1.slice(0,n), ...ar2, ...ar1.slice(n)]}
// copy(ar1,ar2,n)

// -------------------Reverse a String--------------------

let str = "Bulela"
let c= ""
for(k = str.length-1; k >= 0; k-- ){
  c = c + str[k]
 
}
console.log(c)
