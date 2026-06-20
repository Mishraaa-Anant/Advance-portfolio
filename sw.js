/* ═══════════════════════════════════════════
   SERVICE WORKER — Anant Mishra Portfolio
   Enables PWA installability + offline cache.
   Cache strategy: cache-first for static assets.
═══════════════════════════════════════════ */
const CACHE_NAME = 'anant-portfolio-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.min.css',
  '/script.min.js',
  '/profile.png',
  '/manifest.json',
  '/Anant_Mishra.pdf'
];

// Install: pre-cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first for static assets, network-first for API
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Always use network for API calls
  if (url.pathname.startsWith('/api/')) {
    return; // Let browser handle normally
  }

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        // Cache valid GET responses for static assets
        if (event.request.method === 'GET' && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        // Offline fallback — serve cached index
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
