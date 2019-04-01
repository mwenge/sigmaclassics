'use strict';

var CACHE_NAME = 'Plutarch_Quaestiones_Convivales';
var urlsToCache = [
  'Plutarch_Quaestiones_Convivales.html',
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
urlsToCache.push("Plutarch_Quaestiones_Convivales.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales_2.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales_3.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales_4.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales_5.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales_6.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales_7.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales_8.html");
urlsToCache.push("Plutarch_Quaestiones_Convivales.html");
