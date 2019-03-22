var staticCacheName = 'mws-restaurant-worker';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(staticCacheName).then((cache) => {
    return cache.addAll([
      './',
      'js/main.js',
      'js/restaurant_info.js',
      'js/dbhelper.js',
      'css/styles.css',
      'css/queries.css',
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg',
      'img/5.jpg',
      'img/6.jpg',
      'img/7.jpg',
      'img/8.jpg',
      'img/9.jpg',
      'img/10.jpg',
      'data/restaurants.json',
      '//normalize-css.googlecode.com/svn/trunk/normalize.css',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
      'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
      ]);
  }));
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('mws-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
