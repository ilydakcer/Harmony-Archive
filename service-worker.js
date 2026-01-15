const CACHE_NAME = "harmony-cache-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./artists.html",
  "./detail.html",
  "./about.html",
  "./contact.html",
  "./offline.html",
  "./css/style.css",
  "./js/app.js",
  "./js/artists.js",
  "./js/detail.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => caches.match("./offline.html"));
    })
  );
});
