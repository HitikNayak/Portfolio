const CACHE_NAME = "vlsi-cache-v1";

const FILES = [

"./",
"./index.html",
"./styles.css",
"./manifest.json"

];

self.addEventListener("install", e => {

e.waitUntil(

caches.open(CACHE_NAME)
.then(cache => cache.addAll(FILES))

);

});

self.addEventListener("fetch", e => {

e.respondWith(

caches.match(e.request)
.then(res => res || fetch(e.request))

);

});
