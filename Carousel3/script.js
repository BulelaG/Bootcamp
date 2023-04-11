// Declare an array object for our array of images
let images = ["./Age-C.png","./Temp-C.png","./Emoji-S.png"];

// // Create image object and assign width and height
// let img1 = new Image('1024','768');
// let img2 = new Image('1024','768');
// let img3 = new Image('1024','768');

// Assign src attribute to image object
// img1.src = 'Age-C.png';
// img2.src = 'Temp-C.png';
// img3.src = 'Emoji-S.png';


// Push image object to arrayOfImages
// images.push(img1);
// images.push(img2);
// images.push(img3);


// Output arrayOfImages to the console
// console.log(images);

// images.push("Age-C.png")
// images.push("Temp-C.png")
// images.push("Emoji-S.png")
let index = 0;

function next(){

img = document.getElementById("img")

   img.src = images[index]
    index++;

  if(index >= images.length){
      index  = 0;
  }

 
}


function prev(){

  img = document.getElementById("img")

  img.src = images[index]
    index--;
  if(index < 0){
      index  = images.length - 1;
  }
 
}









