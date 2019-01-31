'use strict';

var CACHE_NAME = 'Dionysius of Halicarnassus_De antiquis oratoribus reliquiae';
var urlsToCache = [
  'Dionysius of Halicarnassus_De antiquis oratoribus reliquiae.html',
  'book.css',
  'book.js',
  'atobAndBtoaTogether.min.js',
];

for (var i = 2; i <= 5; i++) {
  urlsToCache.push("Dionysius of Halicarnassus_De antiquis oratoribus reliquiae_" + i + ".html");
}

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});