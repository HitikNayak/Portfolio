/* =========================
   VLSI Portfolio Service Worker
========================= */

const CACHE_NAME = "vlsi-portfolio-v1";

/* Files to cache */

const FILES_TO_CACHE = [

  "./",
  "./index.html",
  "./styles.css",
  "./manifest.json",
  "./cv.pdf",

  /* Images */

  "./images/schematic.png",
  "./images/layout.png",
  "./images/lvs.png",
  "./images/pex.png",
  "./images/iopadring.png",
  "./images/testbench.png",
  "./images/waveform.png",
  "./images/postlayout.png",

  /* Icons */

  "./icons/android-icon-36x36.png",
  "./icons/android-icon-48x48.png",
  "./icons/android-icon-72x72.png",
  "./icons/android-icon-96x96.png",
  "./icons/android-icon-144x144.png",
  "./icons/android-icon-192x192.png"

];

/* =========================
   Install Event
========================= */

self.addEventListener("install", event => {

  console.log("Service Worker Installing...");

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        console.log("Caching Files");

        return cache.addAll(FILES_TO_CACHE);

      })

  );

});

/* =========================
   Fetch Event
========================= */

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        if (response) {
          return response;
        }

        return fetch(event.request);

      })

  );

});

/* =========================
   Activate Event
========================= */

self.addEventListener("activate", event => {

  console.log("Service Worker Activating...");

  event.waitUntil(

    caches.keys().then(cacheNames => {

      return Promise.all(

        cacheNames.map(cache => {

          if (cache !== CACHE_NAME) {

            console.log("Deleting old cache:", cache);

            return caches.delete(cache);

          }

        })

      );

    })

  );

});
