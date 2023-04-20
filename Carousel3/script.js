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



