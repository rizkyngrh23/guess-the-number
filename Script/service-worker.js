const CACHE_NAME = 'v1';
const urlsToCache = [
  './',
  './Script/guess_number.html',
  './Script/style-guess.css',
  './Script/game.js',
  './Script/manifest.json',
  './Assets/icon.png', // Update with the path to your icons
  './Assets/icon-large.png' // Update with the path to your large icon
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
