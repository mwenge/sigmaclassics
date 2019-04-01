'use strict';

var CACHE_NAME = 'Plutarch_De_fortuna_Romanorum';
var urlsToCache = [
  'Plutarch_De_fortuna_Romanorum.html',
  'translation.js',
  '../book.css',
  '../book.js',
  '../atobAndBtoaTogether.min.js',
  '../GFSDidot.css',
  '../GFSDidot.ttf',
  '../OpenSans.css',
  '../OpenSans.ttf',
  '../Cinzel.css',
  '../Cinzel.ttf',
  '../CormorantGaramond.css',
  '../CormorantGaramond.ttf',
];

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
urlsToCache.push("Plutarch_De_fortuna_Romanorum.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_2.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_3.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_4.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_5.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_6.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_7.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_8.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_9.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_10.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_11.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_12.html");
urlsToCache.push("Plutarch_De_fortuna_Romanorum_13.html");
