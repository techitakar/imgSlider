const slides=document.querySelectorAll('.slide');//creates an array of all slides
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');

//optional
const auto=false;
const intervalTime=4000;
let slideInterval;

const nextSlide=()=>{
    //Get current class
    const current=document.querySelector('.current');

    //Remove Current Class
    current.classList.remove('current');

    //check for next slide
    if(current.nextElementSibling){
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        //Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(()=>current.classList.remove('current'));
};

const prevSlide=()=>{
    //Get current class
    const current=document.querySelector('.current');

    //Remove Current Class
    current.classList.remove('current');

    //check for next slide
    if(current.previousElementSibling){
        //Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    }else{
        //Add current to End
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(()=>current.classList.remove('current'));
};

//Button Events
next.addEventListener('click',e=>{
    nextSlide();
});

prev.addEventListener('click',e=>{
    prevSlide();
});

//Auto Slide
if(auto){
    //Run next slide at interval time
    slideInterval=setInterval(nextSlide,intervalTime);//setInterval(function,timeInMS) is a JS function
}