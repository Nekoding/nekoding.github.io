import { registerRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

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

// Css cache
registerRoute(
  new RegExp('/assets/css/.*\\.css'),
  new StaleWhileRevalidate({
    cacheName: 'css_cache',
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

// Icons Png cache
registerRoute(
  new RegExp('/assets/icons/.*\\.png'),
  new StaleWhileRevalidate({
    cacheName: 'icons_png_cache',
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

// Icons ico cache
registerRoute(
  new RegExp('/assets/icons/.*\\.ico'),
  new StaleWhileRevalidate({
    cacheName: 'icons_ico_cache',
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

// Manifest file cache
registerRoute(
  '/manifest.json',
  new CacheFirst({
    cacheName: 'manifest',
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

// Navigation
registerRoute(
  ({ url }) => url.origin === self.location.origin &&
    url.pathname.startsWith('/partials/'),
  new StaleWhileRevalidate({
    cacheName: 'partials-cache'
  })
)

// Pages
registerRoute(
  ({ url }) => url.origin === self.location.origin &&
    url.pathname.startsWith('/pages/'),
  new StaleWhileRevalidate({
    cacheName: 'pages-cache'
  })
)

precacheAndRoute([
  { url: '/pages/list.html', revision: '1' },
  { url: '/sw.js', revision: '1' },
  { url: '/teams.html', revision: '1' },
  { url: '/pages/home.html', revision: '1' },
  { url: '/pages/favorite.html', revision: '1' }
])

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

// Dynamic teams cache
registerRoute(
  new RegExp('/^teams.html.*'),
  new StaleWhileRevalidate({
    cacheName: 'teams-cache'
  })
)

// Service worker
registerRoute(
  new RegExp('/^sw.*'),
  new CacheFirst({
    cacheName: 'service-worker',
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
