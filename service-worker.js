const CACHE_NAME = 'infobola'
const fileToCache = [
  'assets/css/materialize.min.css',
  'assets/css/style.css',
  'assets/icons/apple-icon-57x57.png',
  'assets/icons/apple-icon-60x60.png',
  'assets/icons/apple-icon-72x72.png',
  'assets/icons/apple-icon-76x76.png',
  'assets/icons/apple-icon-114x114.png',
  'assets/icons/apple-icon-120x120.png',
  'assets/icons/apple-icon-144x144.png',
  'assets/icons/apple-icon-152x152.png',
  'assets/icons/apple-icon-180x180.png',
  'assets/icons/android-icon-36x36.png',
  'assets/icons/android-icon-48x48.png',
  'assets/icons/android-icon-72x72.png',
  'assets/icons/android-icon-96x96.png',
  'assets/icons/android-icon-144x144.png',
  'assets/icons/android-icon-192x192.png',
  'assets/icons/favicon-16x16.png',
  'assets/icons/favicon-32x32.png',
  'assets/icons/favicon-96x96.png',
  'assets/icons/ms-icon-70x70.png',
  'assets/icons/ms-icon-144x144.png',
  'assets/icons/ms-icon-150x150.png',
  'assets/icons/ms-icon-310x310.png',
  'assets/js/app.bundle.js',
  'assets/js/teams.bundle.js',
  'pages/favorite.html',
  'pages/home.html',
  'pages/list.html',
  'partials/navigation.html',
  'index.html',
  'teams.html',
  'manifest.json'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(fileToCache)
      })
      .catch(error => console.error(error))
  )
})

self.addEventListener('active', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          // eslint-disable-next-line array-callback-return
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName.startsWith('infobola')) {
              console.log('Cache : ' + cacheName + ' dihapus')
              return caches.delete(cacheName)
            }
          })
        )
      })
      .catch(err => console.error(err))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { cacheName: CACHE_NAME })
      .then(response => {
        if (response) {
          console.info('Menggunakan asset dari cache', response.url)
          return response
        }

        const fetchRequest = event.request.clone()
        return fetch(fetchRequest)
          .then(response => {
            if (!response || response.status !== 200) {
              return response
            }

            const responseToCache = response.clone()
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache))
              .catch(error => console.error(`Terjadi kesalahan : ${error}`))
            return response
          })
      })
      .catch(err => console.error(err))
  )
})
