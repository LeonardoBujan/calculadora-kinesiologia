const CACHE_NAME = 'kinesio-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Instalar y guardar en caché los archivos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Responder desde el caché si no hay conexión
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
