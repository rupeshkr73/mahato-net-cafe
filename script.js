/* ==========================
   MAHATO NET CAFE
   FINAL PREMIUM SCRIPT
========================== */

let slides = document.querySelectorAll(".slide");

let currentSlide = 0;

let totalSlides = slides.length;

let autoSlide;

/* ==========================
   SHOW SLIDE
========================== */

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

updateCounter();

}

/* ==========================
   NEXT
========================== */

function nextSlide(){

currentSlide++;

if(currentSlide >= totalSlides){

currentSlide = 0;

}

showSlide(currentSlide);

resetAutoSlide();

}

/* ==========================
   PREVIOUS
========================== */

function prevSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide = totalSlides - 1;

}

showSlide(currentSlide);

resetAutoSlide();

}

/* ==========================
   PAGE COUNTER
========================== */

function updateCounter(){

const counter =
document.getElementById("pageCounter");

if(counter){

counter.innerHTML =
(currentSlide + 1)
+
" / "
+
totalSlides;

}

}

/* ==========================
   AUTO SLIDE
========================== */

function startAutoSlide(){

autoSlide = setInterval(()=>{

nextSlide();

},7000);

}

function resetAutoSlide(){

clearInterval(autoSlide);

startAutoSlide();

}

/* ==========================
   KEYBOARD SUPPORT
========================== */

document.addEventListener(
"keydown",
function(e){

if(e.key === "ArrowRight"){

nextSlide();

}

if(e.key === "ArrowLeft"){

prevSlide();

}

}
);

/* ==========================
   TOUCH SWIPE
========================== */

let touchStartX = 0;

let touchEndX = 0;

document.addEventListener(
"touchstart",
function(e){

touchStartX =
e.changedTouches[0].screenX;

}
);

document.addEventListener(
"touchend",
function(e){

touchEndX =
e.changedTouches[0].screenX;

handleSwipe();

}
);

function handleSwipe(){

if(
touchEndX
<
touchStartX - 50
){

nextSlide();

}

if(
touchEndX
>
touchStartX + 50
){

prevSlide();

}

}

/* ==========================
   LOADER
========================== */

window.addEventListener(
"load",
function(){

const loader =
document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(()=>{

loader.style.display = "none";

},800);

},1200);

}
);

/* ==========================
   IMAGE POPUP PREVIEW
========================== */

const galleryImages =
document.querySelectorAll(
".gallery img"
);

galleryImages.forEach(img=>{

img.addEventListener(
"click",
function(){

let overlay =
document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.85)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";

let preview =
document.createElement("img");

preview.src = this.src;

preview.style.maxWidth="90%";
preview.style.maxHeight="90%";
preview.style.borderRadius="20px";
preview.style.boxShadow=
"0 20px 50px rgba(0,0,0,.5)";

overlay.appendChild(preview);

overlay.addEventListener(
"click",
function(){

overlay.remove();

}
);

document.body.appendChild(
overlay
);

}
);

});

/* ==========================
   BUTTON ANIMATION
========================== */

const buttons =
document.querySelectorAll(
"button,a"
);

buttons.forEach(btn=>{

btn.addEventListener(
"mouseenter",
function(){

this.style.transform =
"translateY(-2px)";

}
);

btn.addEventListener(
"mouseleave",
function(){

this.style.transform =
"translateY(0px)";

}
);

});

/* ==========================
   INITIALIZE
========================== */

showSlide(currentSlide);

startAutoSlide();

/* ==========================
   END
========================== */
