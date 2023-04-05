const carousel = document.querySelector(".carousel");
const slider = carousel.querySelector("ul");
const slides = carousel.querySelectorAll("li");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next")
let slidePosition = 0;
const slidesToShow =1;
const slideWidth = slide[0].getBoundingClientRect().width;

nextButton.addEventListener("click", ()=>{
    const slidesLeft = slides.length -(slidePosition + slidesToShow);
    if(slidesLeft > 0){
        slidePosition += 1;
        slider.style.transform = 'translateX(-${slidePosition * slideWidth}px)';
    }
});

prevButton.addEventListener("click", ()=>{
    if(slidePosition > 0){
        slidePosition -= 1;
        slider.style.transform = 'translateX(-${slidePosition * slideWidth}px)';
    }
});

