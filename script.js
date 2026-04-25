
/* =========================
   1️⃣ DARK / LIGHT MODE
========================= */

const toggleBtn =
document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

// Change icon

toggleBtn.textContent =
document.body.classList.contains("light-mode")
? "☀️"
: "🌙";

// Save preference

localStorage.setItem(
"theme",
document.body.classList.contains("light-mode")
? "light"
: "dark"
);

});

// Load saved theme

window.addEventListener("load", () => {

if (localStorage.getItem("theme") === "light") {

document.body.classList.add("light-mode");

toggleBtn.textContent = "☀️";

}

});


/* =========================
   2️⃣ TYPING ANIMATION
========================= */

const textArray = [
"VLSI Designer",
"Analog Circuit Engineer",
"Cadence Virtuoso User",
"Physical Design Enthusiast"
];

let i = 0;
let j = 0;

function typeEffect() {

const el = document.getElementById("typing-text");

if (!el) return;

if (j < textArray[i].length) {

el.textContent += textArray[i][j];

j++;

setTimeout(typeEffect, 80);

} else {

setTimeout(eraseEffect, 1500);

}

}

function eraseEffect() {

const el = document.getElementById("typing-text");

if (j > 0) {

el.textContent = textArray[i].substring(0, j - 1);

j--;

setTimeout(eraseEffect, 40);

} else {

i = (i + 1) % textArray.length;

setTimeout(typeEffect, 500);

}

}

window.addEventListener("load", typeEffect);


/* =========================
   3️⃣ SCROLL REVEAL
========================= */

function revealSections() {

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach((el) => {

const windowHeight = window.innerHeight;

const elementTop =
el.getBoundingClientRect().top;

const offset = 100;

if (elementTop < windowHeight - offset) {

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealSections);


/* =========================
   4️⃣ PROJECT FILTER
========================= */

function filterProjects(category) {

const projects =
document.querySelectorAll(".project-box");

projects.forEach((project) => {

if (category === "all") {

project.style.display = "block";

} else {

project.style.display =
project.classList.contains(category)
? "block"
: "none";

}

});

}


/* =========================
   5️⃣ SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

let scrollTop =
document.documentElement.scrollTop ||
document.body.scrollTop;

let scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let progress =
(scrollTop / scrollHeight) * 100;

document.getElementById("progressBar").style.width =
progress + "%";

});


/* =========================
   6️⃣ IMAGE POPUP GALLERY
========================= */

const images =
document.querySelectorAll("img");

const popup =
document.getElementById("imagePopup");

const popupImg =
document.getElementById("popupImg");

const closePopup =
document.getElementById("closePopup");

images.forEach((img) => {

img.addEventListener("click", () => {

popup.style.display = "flex";

popupImg.src = img.src;

});

});

closePopup.addEventListener("click", () => {

popup.style.display = "none";

});

// Close popup when clicking outside image

popup.addEventListener("click", (e) => {

if (e.target === popup) {

popup.style.display = "none";

}

});
