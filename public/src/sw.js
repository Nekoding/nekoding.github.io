import { registerRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

precacheAndRoute([
  { url: '/assets/css/materialize.min.css', revision: '1' },
  { url: '/assets/css/style.css', revision: '1' },
  { url: '/pages/favorite.html', revision: '1' },
  { url: '/pages/home.html', revision: '1' },
  { url: '/pages/list.html', revision: '1' },
  { url: '/partials/navigation.html', revision: '1' },
  { url: '/index.html', revision: '1' },
  { url: '/teams.html', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/assets/icons/apple-icon-57x57.png', revision: '1' },
  { url: '/assets/icons/apple-icon-60x60.png', revision: '1' },
  { url: '/assets/icons/apple-icon-72x72.png', revision: '1' },
  { url: '/assets/icons/apple-icon-76x76.png', revision: '1' },
  { url: '/assets/icons/apple-icon-114x114.png', revision: '1' },
  { url: '/assets/icons/apple-icon-120x120.png', revision: '1' },
  { url: '/assets/icons/apple-icon-144x144.png', revision: '1' },
  { url: '/assets/icons/apple-icon-152x152.png', revision: '1' },
  { url: '/assets/icons/apple-icon-180x180.png', revision: '1' },
  { url: '/assets/icons/android-icon-36x36.png', revision: '1' },
  { url: '/assets/icons/android-icon-48x48.png', revision: '1' },
  { url: '/assets/icons/android-icon-72x72.png', revision: '1' },
  { url: '/assets/icons/android-icon-96x96.png', revision: '1' },
  { url: '/assets/icons/android-icon-144x144.png', revision: '1' },
  { url: '/assets/icons/android-icon-192x192.png', revision: '1' },
  { url: '/assets/icons/favicon-16x16.png', revision: '1' },
  { url: '/assets/icons/favicon-32x32.png', revision: '1' },
  { url: '/assets/icons/favicon-96x96.png', revision: '1' },
  { url: '/assets/icons/ms-icon-70x70.png', revision: '1' },
  { url: '/assets/icons/ms-icon-144x144.png', revision: '1' },
  { url: '/assets/icons/ms-icon-150x150.png', revision: '1' },
  { url: '/assets/icons/ms-icon-310x310.png', revision: '1' },
  { url: '/assets/icons/128x128.png', revision: '1' },
  { url: '/assets/icons/256x256.png', revision: '1' },
  { url: '/assets/icons/512x512.png', revision: '1' },
  { url: '/assets/icons/maskable_icon.png', revision: '1' },
  { url: '/assets/icons/maskable_icon_192.png', revision: '1' },
], {
  ignoreURLParametersMatching: [/.*/],
})

// Materialize js
registerRoute(
  /^https\:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/materialize\/1\.0\.0\/js\/materialize\.min\.js/,
  new StaleWhileRevalidate({
    cacheName: 'materialize_js',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 60
      })
    ]
  })
)

// Google font
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' ||
                      url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 60
      }),
    ]
  })
)

// Api cache
registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  new CacheFirst({
    cacheName: 'api_cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 60
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
)

// Pages cache
registerRoute(
  new RegExp('/pages/'),
  new StaleWhileRevalidate({
    cacheName: 'pages'
  })
);

// Limitasi penggunaan cache storage
registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);

// Teams cache dinamis
registerRoute(
  new RegExp('/teams.html'),
  new CacheFirst({
    cacheName: 'teams_cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 60
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
)

// Push notification
self.addEventListener('push', event => {
  let body = ''

  if (event.data) {
    body = event.data.text()
  } else {
    body = 'Push message no payload'
  }

  const options = {
    body: body,
    icon: '/assets/icons/favicon-32x32.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArival: Date.now(),
      primaryKey: 1
    }
  }

  event.waitUntil(
    self.registration.showNotification('Push notifications', options)
  )
})
