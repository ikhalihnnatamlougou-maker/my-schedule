const cacheName = 'hissasi-v1';
const assets = ['./', './index.html', './manifest.json'];

// تثبيت التطبيق في الذاكرة المؤقتة
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// جلب الملفات من الذاكرة عند انقطاع الإنترنت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});