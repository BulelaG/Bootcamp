
// we need nodeJS to run JS on its own in the terminal

//------------------Declaring & Assigning variables

// var a = 1;
// var a = 10;
// let a = 2 ;
// let b = 5 ;
// let c = b % a ;
// console.log(c);


// ----------------------Checking equality----------------------

// let a = "10";
// let b = 10;

// if(a==b){
//     console.log("True")
// }
// else{console.log("False")}


// ------------------------------------Checking strict equality-------------

// let a = "10";
// let b = 10;

// if(a===b){
//     console.log("True")
// }
// else{console.log("False")}

//--------------------------------- is not equal----------------

// let a = "10";
// let b = 10;

// if(a!=b){
//     console.log("True")
// }
// else{console.log("False")}


// -------Logical Oparators-------------
// ---------------and oparator

// let d = 10;
// let c= 10;
// let a = 10;
// let b = 310;

// if(a==b && c==d){
//     console.log("True")
// }
// else{console.log("False")}


// ---------------or oparator-----------

// let d = 20;
// let c= 10;
// let a = 10;
// let b = 20;

// if(a==b || c==d){
//     console.log("True")
// }
// else{console.log("False")}

// -----------------------------Destructuring asignment-------------------

// let a = 2;
// let b = 3;

// [a, b]=[b, a]

// console.log(a)
// console.log(b)


// let a = 2;
// let b = 1;
// [a, b] = [1, 2, 3];
// console.log(a); // => 1
// console.log(b); // => 2


//  ----------------Addition && Difference-------------


// let a = 1;
// let b = 2;


// a = a + b;

// b = a - b;

// a = a - b;
// console.log(a); // => 2
// console.log(b); // => 1


// ---------------Temporary Variable method---------

// let a = 1;   
// let b = 2;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a); // => 2
// console.log(b); // => 1

// using IF statement to check condition and return results

// let a = -20 ;
// if (a>10){
//     console.log("Greater than a decade");
// }
// else if(a==10){
//     console.log("It is a decade")
// }
// else if( a<10 && a>=0){
//     console.log("It is less than a decade.")
// }else {
//     console.log("We can not have a negative number")
// }


let a = 1;
let b = 3;
let c = 3;

if( a>=b  && a>=c) {
    console.log("a is the maximum number")
}
if( b>=a  && b>=c) {
    console.log("b is the maximum number")
}
if( c>=a  && c>=b) {
    console.log("c is the maximum number")
}


