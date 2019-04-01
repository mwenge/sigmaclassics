'use strict';

var CACHE_NAME = 'Plutarch_Comparison_of_Lycurgus_and_Numa';
var urlsToCache = [
  'Plutarch_Comparison_of_Lycurgus_and_Numa.html',
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
urlsToCache.push("Plutarch_Comparison_of_Lycurgus_and_Numa.html");
urlsToCache.push("Plutarch_Comparison_of_Lycurgus_and_Numa_2.html");
urlsToCache.push("Plutarch_Comparison_of_Lycurgus_and_Numa_3.html");
urlsToCache.push("Plutarch_Comparison_of_Lycurgus_and_Numa_4.html");
