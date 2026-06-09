/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.innerHTML =
            navLinks.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

}

/* =========================
   CLOSE MENU ON CLICK
========================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

       if(navLinks){
        navLinks.classList.remove("active");
       }
        if(menuBtn){
            menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';
        }

    });

});

/* =========================
   STICKY NAVBAR
========================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
            "rgba(0,0,0,0.95)";

    }
    else{

        header.style.background =
            "rgba(0,0,0,0.7)";
    }

});

/* =========================
   TYPING EFFECT
========================= */

const typingText =
document.querySelector(".typing-text");

const words = [

    "Junior Research Fellow",

    "VLSI Engineer",

    "ASIC Designer",

    "Cadence Virtuoso Designer",

    "Researcher",

    "Electronics Engineer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typingText) return;

    const currentWord =
        words[wordIndex];

    if(!deleting){

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }
    else{

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}

typeEffect();

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(

'.stat-card h2, .achievement-stat h2, .exp-stat h3'

);

const speed = 100;

function animateCounters(){

    counters.forEach(counter => {

        const target =
        counter.innerText
        .replace('%','')
        .replace('+','');

        if(isNaN(target)) return;

        let count = 0;

        const updateCount = () => {

            const increment =
            target / speed;

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count);

                requestAnimationFrame(
                    updateCount
                );

            }
            else{

                let original =
                counter.getAttribute(
                    "data-original"
                );

                if(original){

                    counter.innerText =
                    original;
                }

            }

        };

        counter.setAttribute(
            "data-original",
            counter.innerText
        );

        updateCount();

    });

}

/* =========================
   INTERSECTION OBSERVER
========================= */

const counterSection =
document.querySelector(
".stats"
);

if(counterSection){

    const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    animateCounters();

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold:0.5
        }

    );

    observer.observe(
        counterSection
    );

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(

'.project-card,\
 .internship-card,\
 .achievement-card,\
 .timeline-item,\
 .skill-category,\
 .feature-card,\
 .resume-card'

);

function revealOnScroll(){

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            el.classList.add(
                "show"
            );

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll(
"section"
);

const navItems =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(
            pageYOffset >= sectionTop
        ){

            current =
            section.getAttribute(
                "id"
            );

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
            "active-link"
        );

        if(
            link.getAttribute(
                "href"
            ) === "#" + current
        ){

            link.classList.add(
                "active-link"
            );

        }

    });

});

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",

    function(e){

        e.preventDefault();

        const target =
        document.querySelector(

            this.getAttribute(
                "href"
            )

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.id =
"backToTop";

document.body.appendChild(
topBtn
);

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 500){

        topBtn.style.display =
        "block";

    }
    else{

        topBtn.style.display =
        "none";

    }

});

topBtn.addEventListener(
"click",
() => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* =========================
   LOADER
========================= */

window.addEventListener(
"load",
() => {

    document.body.classList.add(
        "loaded"
    );

});

console.log(
"Portfolio Loaded Successfully"
);
