/* =========================
   MOBILE MENU TOGGLE
========================= */

function toggleMenu() {

document.querySelector("nav ul")
.classList.toggle("active");

}


/* =========================
   DARK MODE TOGGLE 🌙
========================= */

const darkToggle =
document.getElementById("darkToggle");

if(darkToggle){

darkToggle.onclick = function(){

document.body.classList.toggle("dark");

/* Save Mode */

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}
else{

localStorage.setItem("theme","light");

}

};

}


/* Load Saved Theme */

window.onload = function(){

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");

}

/* Show Download Count */

if(localStorage.downloadCount){

document.getElementById("downloadCount")
.textContent =
localStorage.downloadCount;

}

};



/* =========================
   TYPING EFFECT ⌨️
========================= */

var text =
"Hi, I'm Hitik Kumar Nayak — VLSI & Analog Design Engineer";

var i = 0;

function typing(){

var typingElement =
document.getElementById("typing");

if(typingElement){

if(i < text.length){

typingElement.innerHTML +=
text.charAt(i);

i++;

setTimeout(typing, 60);

}

}

}

typing();



/* =========================
   SCROLL PROGRESS BAR
========================= */

window.onscroll = function(){

var winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

var height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

var scrolled =
(winScroll / height) * 100;

var bar =
document.getElementById("scrollBar");

if(bar){

bar.style.width =
scrolled + "%";

}

};



/* =========================
   IMAGE MODAL VIEWER
========================= */

function openModal(src){

var modal =
document.getElementById("modal");

var img =
document.getElementById("modalImg");

modal.style.display = "flex";

img.src = src;

}

function closeModal(){

document.getElementById("modal")
.style.display = "none";

}



/* =========================
   PROJECT FILTER
========================= */

function filterProjects(category){

var cards =
document.querySelectorAll(".project-card");

cards.forEach(function(card){

if(category === "all"){

card.style.display = "block";

}

else if(card.classList.contains(category)){

card.style.display = "block";

}

else{

card.style.display = "none";

}

});

}



/* =========================
   CERTIFICATE SEARCH
========================= */

function searchCertificates(){

var input =
document.getElementById("certificateSearch");

var filter =
input.value.toLowerCase();

var certs =
document.querySelectorAll(".certificate");

certs.forEach(function(cert){

var text =
cert.innerText.toLowerCase();

if(text.includes(filter)){

cert.style.display = "block";

}

else{

cert.style.display = "none";

}

});

}



/* =========================
   RESUME DOWNLOAD COUNTER
========================= */

function countDownload(){

if(localStorage.downloadCount){

localStorage.downloadCount =
Number(localStorage.downloadCount) + 1;

}
else{

localStorage.downloadCount = 1;

}

document.getElementById("downloadCount")
.textContent =
localStorage.downloadCount;

}



/* =========================
   ANIMATED COUNTERS
========================= */

var counters =
document.querySelectorAll(".counter");

counters.forEach(function(counter){

counter.innerText = "0";

var updateCounter = function(){

var target =
+counter.getAttribute("data-target");

var count =
+counter.innerText;

var increment =
target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter, 20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});



/* =========================
   LOADER ANIMATION
========================= */

window.addEventListener("load", function(){

var loader =
document.getElementById("loader");

if(loader){

loader.style.display = "none";

}

});



/* =========================
   FLOATING CONTACT BUTTON
========================= */

function scrollToContact(){

document.getElementById("contact")
.scrollIntoView({

behavior: "smooth"

});

}



/* =========================
   SIMPLE VISITOR COUNTER
(Local Counter)
========================= */

if(localStorage.visits){

localStorage.visits =
Number(localStorage.visits) + 1;

}
else{

localStorage.visits = 1;

}

var visitDisplay =
document.getElementById("visitorCount");

if(visitDisplay){

visitDisplay.textContent =
localStorage.visits;

}
