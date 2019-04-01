'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_Ad_Ammaeum';
var urlsToCache = [
  'Dionysius_of_Halicarnassus_Ad_Ammaeum.html',
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
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_Ad_Ammaeum_12.html");
