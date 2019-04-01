'use strict';

var CACHE_NAME = 'Pausanias_Description_of_Greece';
var urlsToCache = [
  'Pausanias_Description_of_Greece.html',
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
urlsToCache.push("Pausanias_Description_of_Greece.html");
urlsToCache.push("Pausanias_Description_of_Greece_2.html");
urlsToCache.push("Pausanias_Description_of_Greece_3.html");
urlsToCache.push("Pausanias_Description_of_Greece_4.html");
urlsToCache.push("Pausanias_Description_of_Greece_5.html");
urlsToCache.push("Pausanias_Description_of_Greece_6.html");
urlsToCache.push("Pausanias_Description_of_Greece_7.html");
urlsToCache.push("Pausanias_Description_of_Greece_8.html");
urlsToCache.push("Pausanias_Description_of_Greece_9.html");
urlsToCache.push("Pausanias_Description_of_Greece_10.html");
