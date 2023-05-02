// Declare an empty  object for our  of images
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
<<<<<<< HEAD
// function upload(){
// let inputImage = document.getElementById("pic").value  // \dom method for input value
// images.push(inputImage)                                //adding images to array

// sessionStorage.setItem("Pics", JSON.stringify(images));     //adding array to session storage
// let inputImag = sessionStorage.getItem(JSON.parse("Pics")); //getting images/data and assigning it to a new variable
// document.getElementById("img").innerHTML = inputImag    //displaying data on image tag
// document.getElementById("pic").value = " "  // clearing input tag
=======
function upload(){
let inputImage = document.getElementById("pic").value  // \dom method for input value
images.push(inputImage)                                //adding images to 

sessionStorage.setItem("Pics", JSON.stringify(images));     //adding  to session storage
let inputImag = sessionStorage.getItem(JSON.parse("Pics")); //getting images/data and assigning it to a new variable
document.getElementById("img").innerHTML = inputImag    //displaying data on image tag
document.getElementById("pic").value = " "  // clearing input tag
>>>>>>> 0955deb75fb72b80b1440c30db84d235763b4a69

//  }
 
function upload() {
  let inputImage = document.getElementById("pic").value.trim();
  if (inputImage === "") {
    alert("Please enter a valid image URL");
    return;
  }
  images.push(inputImage);
  sessionStorage.setItem("Pics", JSON.stringify(images));
  index = images.length - 1;
  img.src = images[index];
  document.getElementById("pic").value = "";
}

// function remove(){
//   // images.pop(inputImage)                                //adding images to array
//   removeImage  =  sessionStorage.removeItem("Pics"); //remove image from session storage 
//   img.src = images[index]
//   document.getElementById("img").innerHTML = removeImage    //displaying data on image tag

//  }
   

// -----

function remove(){
<<<<<<< HEAD
  images.pop();
  sessionStorage.setItem("Pics", JSON.stringify(images));
  index = 0;
  img.src = images[index];
}
// -----


=======
  // images.pop(inputImage)                                //adding images to 
  removeImage  =  sessionStorage.removeItem("Pics"); //remove image from session storage 
  img.src = images[index]
  document.getElementById("img").innerHTML = removeImage    //displaying data on image tag
}
   
>>>>>>> 0955deb75fb72b80b1440c30db84d235763b4a69
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



