self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/recapp2.0/README.md',
      '/recapp2.0/actualites.html',
      '/recapp2.0/aftermovie.html',
      '/recapp2.0/article.html',
      '/recapp2.0/autrevideo.html',
      '/recapp2.0/compte.html',
      '/recapp2.0/contact.html',
      '/recapp2.0/css/index.css',
      '/recapp2.0/img/logo.png',
      '/recapp2.0/index.html',
      '/recapp2.0/interview.html',
      '/recapp2.0/js/index.js',
      '/recapp2.0/js/sw.js',
      '/recapp2.0/manifest.webmanifest',
      '/recapp2.0/notifications.html',
      '/recapp2.0/partenaire_rec.html',
      '/recapp2.0/partenaires.html',
      '/recapp2.0/photos/anissa.png',
      '/recapp2.0/photos/eden.jpg',
      '/recapp2.0/photos/etienne.JPG',
      '/recapp2.0/photos/Logo-REC-Theme.jpg',
      '/recapp2.0/photos/matthieu.jpg',
      '/recapp2.0/photos/PA.jpg',
      '/recapp2.0/podcasts.html',
      '/recapp2.0/privacypolicy.html',
      '/recapp2.0/radio.html',
      '/recapp2.0/reglages.html',
      '/recapp2.0/terms&conditions.html',
      '/recapp2.0/video.html'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
