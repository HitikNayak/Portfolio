/* =========================
LOADER ANIMATION
========================= */

window.addEventListener("load", function () {

document.getElementById("loader")
.style.display = "none";

});


/* =========================
DARK MODE TOGGLE 🌙
========================= */

const toggle =
document.getElementById("darkToggle");

toggle.onclick = function () {

document.body.classList.toggle("dark");

};


/* =========================
TYPING ANIMATION ⌨️
========================= */

const text =
"Hi, I'm Hitik Kumar Nayak";

let index = 0;

function typeEffect() {

if (index < text.length) {

document.getElementById("typing")
.innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect, 80);

}

}

typeEffect();


/* =========================
SCROLL PROGRESS BAR
========================= */

window.onscroll = function () {

let winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled =
(winScroll / height) * 100;

document.getElementById("scrollBar")
.style.width = scrolled + "%";

};


/* =========================
PROJECT FILTERING
========================= */

function filterProjects(category) {

let cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {

if (
category === "all" ||
card.classList.contains(category)
) {

card.style.display = "block";

}

else {

card.style.display = "none";

}

});

}


/* =========================
IMAGE MODAL POPUP
========================= */

function openModal(src) {

document.getElementById("imageModal")
.style.display = "block";

document.getElementById("modalImg")
.src = src;

}

function closeModal() {

document.getElementById("imageModal")
.style.display = "none";

}


/* =========================
CERTIFICATE SEARCH
========================= */

function searchCertificates() {

let input =
document.getElementById("certificateSearch");

let filter =
input.value.toLowerCase();

let certs =
document.querySelectorAll(".certificate");

certs.forEach(cert => {

let text =
cert.innerText.toLowerCase();

if (text.includes(filter)) {

cert.style.display = "block";

}

else {

cert.style.display = "none";

}

});

}


/* =========================
ANIMATED COUNTERS
========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 100;

if (count < target) {

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter, 20);

}

else {

counter.innerText = target;

}

};

updateCounter();

});


/* =========================
RESUME DOWNLOAD COUNTER
========================= */

function countDownload() {

let count =
localStorage.getItem("downloads");

if (!count) {

count = 0;

}

count++;

localStorage.setItem(
"downloads",
count
);

document.getElementById(
"downloadCount"
).innerText = count;

}


/* Load stored count */

window.onload = function () {

let count =
localStorage.getItem("downloads");

if (count) {

document.getElementById(
"downloadCount"
).innerText = count;

}

};


/* =========================
MOBILE MENU
========================= */

function toggleMenu() {

document.querySelector("nav ul")
.classList.toggle("show");

}


/* =========================
GITHUB AUTO PROJECT LOADER
========================= */

async function loadGitHubProjects() {

try {

let response =
await fetch(
"https://api.github.com/users/HitikNayak/repos"
);

let repos =
await response.json();

let container =
document.querySelector(
".projects-grid"
);

repos.slice(0,3).forEach(repo => {

let div =
document.createElement("div");

div.className =
"project-card web";

div.innerHTML = `

<h3>
${repo.name}
</h3>

<p>
${repo.description || "GitHub Project"}
</p>

<a href="${repo.html_url}"
target="_blank">

View Project

</a>

`;

container.appendChild(div);

});

}

catch(error) {

console.log(
"GitHub Load Failed"
);

}

}

loadGitHubProjects();


/* =========================
CADENCE FLOW ANIMATION 🧠
========================= */

const cadenceImages =
document.querySelectorAll(
".cadence-grid img"
);

cadenceImages.forEach(img => {

img.addEventListener(
"mouseover",
function(){

this.style.transform =
"scale(1.05)";

}

);

img.addEventListener(
"mouseout",
function(){

this.style.transform =
"scale(1)";

}

);

});


/* =========================
SCROLL REVEAL EFFECT
========================= */

window.addEventListener(
"scroll",
reveal
);

function reveal() {

let reveals =
document.querySelectorAll(
"section"
);

reveals.forEach(section => {

let windowHeight =
window.innerHeight;

let elementTop =
section.getBoundingClientRect()
.top;

let elementVisible = 150;

if (
elementTop <
windowHeight - elementVisible
) {

section.style.opacity = 1;
section.style.transform =
"translateY(0)";

}

});

}
