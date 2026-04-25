const cacheName = 'bihar-app-v1';
const assets = [
  'Bindex.html',
  'Bstyle.css',
  'Bapp.js',
  'Gemini_Generated_Image_od7eunod7eunod7e.png'
];

// Install event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event (Offline access)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
