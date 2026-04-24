const CACHE_NAME = 'dietabot-cache-v1';

// Al instalar, no guardamos el iframe en caché porque Apps Script necesita internet
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Simplemente dejamos pasar la petición para que el iframe cargue siempre online
  event.respondWith(fetch(event.request));
});
