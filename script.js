const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

toggleBtn.textContent =
document.body.classList.contains("light-mode")
? "☀️"
: "🌙";

localStorage.setItem(
"theme",
document.body.classList.contains("light-mode")
? "light"
: "dark"
);

});

window.addEventListener("load", () => {

if (localStorage.getItem("theme") === "light") {

document.body.classList.add("light-mode");

toggleBtn.textContent = "☀️";

}

});
const textArray = [
"VLSI Designer",
"Analog Circuit Engineer",
"Cadence Virtuoso User",
"Physical Design Enthusiast"
];

let i = 0, j = 0;

function type() {

let typing = document.getElementById("typing-text");

if (!typing) return;

if (j < textArray[i].length) {

typing.textContent += textArray[i][j];

j++;

setTimeout(type, 80);

} else {

setTimeout(erase, 1500);

}

}

function erase() {

let typing = document.getElementById("typing-text");

if (j > 0) {

typing.textContent = textArray[i].substring(0, j - 1);

j--;

setTimeout(erase, 40);

} else {

i = (i + 1) % textArray.length;

setTimeout(type, 500);

}

}

window.onload = type;
function filterProjects(category) {

let projects = document.querySelectorAll(".project-box");

projects.forEach(p => {

if (category === "all") {

p.style.display = "block";

} else {

p.style.display =
p.classList.contains(category)
? "block"
: "none";

}

});

}
window.onscroll = function () {

let winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled =
(winScroll / height) * 100;

document.getElementById("progressBar").style.width =
scrolled + "%";

};

const images = document.querySelectorAll("img");

const popup = document.getElementById("imagePopup");

const popupImg = document.getElementById("popupImg");

const closePopup = document.getElementById("closePopup");

images.forEach(img => {

img.addEventListener("click", () => {

popup.style.display = "flex";

popupImg.src = img.src;

});

});

closePopup.addEventListener("click", () => {

popup.style.display = "none";

});
