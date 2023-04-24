// Declare an array object for our array of images

let images;
if(sessionStorage.getItem("Pics")){images =JSON.parse(sessionStorage.getItem("Pics"))}
else{images = ["./Age-C.png","./Temp-C.png","./Emoji-S.png"]}




// // Create image object and assign width and height
// let img1 = new Image('1024','768');

// Assign src attribute to image object
// img1.src = 'Age-C.png';

// Push image object to arrayOfImages
// images.push(img1);

// Output arrayOfImages to the console
// console.log(images);

// images.push("Age-C.png")
//


let index = 0;
img.src = images[index]

// function upload(){
//     let inputImage = document.getElementById("pic").value 
//     sessionStorage.setItem("image",inputImage );
//     let inputImag = sessionStorage.getItem(("image"));
//      images.push(inputImag)
//     document.getElementById("pic").value = " "
//     }
   

function next(){

  index++;
  if(index >= images.length){ index  = 0;}
  img.src = images[index]

}
 

function prev(){

  index--;
  if(index < 0){
  index  = images.length - 1;}
  img.src = images[index]
 
}


function upload(){
let inputImage = document.getElementById("pic").value 
images.push(inputImage)
document.getElementById("pic").value = " " }
sessionStorage.setItem("Pics", JSON.stringify(images));
let inputImag = sessionStorage.getItem(JSON.parse("Pics"));
document.getElementById("img").innerHTML = inputImag




function remove(){

 removeImage = document.getElementById("pic").value ;
images.splice(2,1);
document.getElementById("pic").value = '';
}



