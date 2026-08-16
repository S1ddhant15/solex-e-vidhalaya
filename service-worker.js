// ======================================================
// SOLEX e-VIDHAYALAY — SERVICE WORKER
// Offline access and faster loading
// ======================================================

const CACHE_NAME = "solex-e-vidhayalay-v1";

const OFFLINE_PAGE = "./404.html";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./login.html",
  "./course.html",
  "./certificate.html",
  "./admin.html",
  "./404.html",

  "./portal.css",
  "./theme.css",
  "./learning.css",

  "./portal.js",
  "./auth.js",
  "./course.js",
  "./admin.js",

  "./manifest.json",
  "./assets/solex-logo.png"
];


// ======================================================
// INSTALL
// ======================================================

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});


// ======================================================
// ACTIVATE
// Remove old application caches
// ======================================================

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }

            return null;
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});


// ======================================================
// FETCH
// Use network first, then cached version
// ======================================================

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (
          !networkResponse ||
          networkResponse.status !== 200 ||
          networkResponse.type === "opaque"
        ) {
          return networkResponse;
        }

        const responseCopy = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseCopy);
        });

        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          if (event.request.mode === "navigate") {
            return caches.match(OFFLINE_PAGE);
          }

          return new Response("Resource unavailable while offline.", {
            status: 503,
            statusText: "Offline",
            headers: {
              "Content-Type": "text/plain"
            }
          });
        });
      })
  );
});


// ======================================================
// RECEIVE UPDATE COMMAND
// ======================================================

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
