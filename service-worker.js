/* =========================
SERVICE WORKER
Offline Support
========================= */

const CACHE_NAME =
"hitik-portfolio-v1";

const urlsToCache = [

"/",
"index.html",
"styles.css",
"script.js",
"resume.pdf"

];


/* INSTALL */

self.addEventListener(
"install",
event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

return cache.addAll(
urlsToCache
);

})

);

});


/* FETCH */

self.addEventListener(
"fetch",
event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return (
response ||
fetch(event.request)
);

})

);

});
