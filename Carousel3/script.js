// Declare an empty array object for our array of images
let images;

// check if we have data in storage
if(sessionStorage.getItem("Pics")){images =JSON.parse(sessionStorage.getItem("Pics"))}
// if not assign data
else{images = ["./Age-C.png","./Temp-C.png","./Emoji-S.png"]}


// set an index
let index = 0;
// dom connecting/manipulation to image tag
img.src = images[index]

 HEAD
// function upload(){
//     let inputImage = document.getElementById("pic").value 
//     sessionStorage.setItem("image",inputImage );
//     let inputImag = sessionStorage.getItem(("image"));
//      images.push(inputImag)
//     document.getElementById("pic").value = " "
//     }

// function to upload an image
function upload(){
let inputImage = document.getElementById("pic").value  // \dom method for input value
images.push(inputImage)                                //adding images to array

sessionStorage.setItem("Pics", JSON.stringify(images));     //adding array to session storage
let inputImag = sessionStorage.getItem(JSON.parse("Pics")); //getting images/data and assigning it to a new variable
document.getElementById("img").innerHTML = inputImag    //displaying data on image tag
document.getElementById("pic").value = " "  // clearing input tag

 }
 

function remove(){
  // images.pop(inputImage)                                //adding images to array
  removeImage  =  sessionStorage.removeItem("Pics"); //remove image from session storage 
  img.src = images[index]
  document.getElementById("img").innerHTML = removeImage    //displaying data on image tag

 }
 e53d3f570eb20a5199eea2bc9b71a8aaa9f3bb60
   


function next(){
  index++;
  if(index >= images.length){ index  = 0;}
  img.src = images[index]
}
 

function prev(){
  index--;
  if(index < 0){index  = images.length - 1;}
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



