/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "175-c1e54d2ab8eb26b7f93c.js"
  },
  {
    "url": "175-c1e54d2ab8eb26b7f93c.js.map",
    "revision": "525be5908410d265766e98ad9ee1ab76"
  },
  {
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-af967122e533a9393353.js"
  },
  {
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-af967122e533a9393353.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-af967122e533a9393353.js.map",
    "revision": "ca622ebfffa3eede778f809952cbe4ed"
  },
  {
    "url": "231-77e82147e78e78ffefaa.js"
  },
  {
    "url": "231-77e82147e78e78ffefaa.js.map",
    "revision": "1b09378877884dce1374246d8dfc3eb4"
  },
  {
    "url": "368-71a4b6c9e2691b60af69.js"
  },
  {
    "url": "368-71a4b6c9e2691b60af69.js.map",
    "revision": "33eb95d9ed22c621be98f53c01116170"
  },
  {
    "url": "404.html",
    "revision": "a90654a8d00bf88f86d749c0df426c54"
  },
  {
    "url": "404/index.html",
    "revision": "ab78db032aa137a2f1c4a4c36eed947d"
  },
  {
    "url": "app-c8c1ca11bd69db3cc0fe.js"
  },
  {
    "url": "app-c8c1ca11bd69db3cc0fe.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-c8c1ca11bd69db3cc0fe.js.map",
    "revision": "ffd35ae36ea22b513f795ab8634c0631"
  },
  {
    "url": "banner.png",
    "revision": "cf0732439b6d045e50890ce18ac0d106"
  },
  {
    "url": "chunk-map.json",
    "revision": "27ffcf2e821c86188853903a24ce2d3b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d9e408d24a9c5fb12376.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d9e408d24a9c5fb12376.js.map",
    "revision": "9fb05816811d022d9282646192749e1e"
  },
  {
    "url": "component---src-pages-404-js-d2fbb6b3b687067bade8.js"
  },
  {
    "url": "component---src-pages-404-js-d2fbb6b3b687067bade8.js.map",
    "revision": "80e19a6df00e1220bf76586af6844fe6"
  },
  {
    "url": "component---src-pages-cv-js-2217c1bb66a0a5682b47.js"
  },
  {
    "url": "component---src-pages-cv-js-2217c1bb66a0a5682b47.js.map",
    "revision": "9d808e03d05672625c77b115ebf0fe0a"
  },
  {
    "url": "component---src-pages-index-js-6f2bf71d81c315d27abd.js"
  },
  {
    "url": "component---src-pages-index-js-6f2bf71d81c315d27abd.js.map",
    "revision": "32f28d6146c5978aa70db21163ba0d00"
  },
  {
    "url": "cv/index.html",
    "revision": "7904c48a44554dd5bb949c9e8b22b2d7"
  },
  {
    "url": "favicon.ico",
    "revision": "16ca3313900abe358684b4f5d977ee0a"
  },
  {
    "url": "favicon.svg",
    "revision": "79517023c37b65f55b6ccc5b5372b568"
  },
  {
    "url": "framework-e26baa59f19dfe417114.js"
  },
  {
    "url": "framework-e26baa59f19dfe417114.js.LICENSE.txt",
    "revision": "34ad9c8bf4d74905b6b042d9f6310c3b"
  },
  {
    "url": "framework-e26baa59f19dfe417114.js.map",
    "revision": "4548824d705ec6ab9dd2fd8705b6770f"
  },
  {
    "url": "icon_x128.png",
    "revision": "abcd20319f9b15e872e129223a9b3d68"
  },
  {
    "url": "icon_x192.png",
    "revision": "3bbb892c59059cc82c93288de37c2ce9"
  },
  {
    "url": "icon_x384.png",
    "revision": "ac5d28d3fbee8126dcf3fa6a25919e57"
  },
  {
    "url": "icon_x48.png",
    "revision": "f4e36b4e04ca331601d7fe7a1757f598"
  },
  {
    "url": "icon_x512.png",
    "revision": "6baba30cd70eea5dbe721661b84acdc5"
  },
  {
    "url": "icon_x72.png",
    "revision": "c1235e21e462369635e19576536235f5"
  },
  {
    "url": "icon_x96.png",
    "revision": "83f364545538c15d523cd19b557c89ed"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "1fa4b962f4f992754f7d8223052a38f3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ca415813ed425492d23b152c97ebd0a3"
  },
  {
    "url": "maskable_icon_x128.png",
    "revision": "a9d3d529b15a5a4e87777015cb557963"
  },
  {
    "url": "maskable_icon_x192.png",
    "revision": "51156bf8805a4c146634bac668780263"
  },
  {
    "url": "maskable_icon_x384.png",
    "revision": "dbbb7583d0c05f9b41ee78aa5babb345"
  },
  {
    "url": "maskable_icon_x48.png",
    "revision": "88fe8098bed8c8b511e5ccf231def262"
  },
  {
    "url": "maskable_icon_x512.png",
    "revision": "4fadf198860f79f94f45a1693d895b13"
  },
  {
    "url": "maskable_icon_x72.png",
    "revision": "067a1c3dde2b6ecdb11562c7377c8603"
  },
  {
    "url": "maskable_icon_x96.png",
    "revision": "4510ff606656c8ff0ba4f5c9e2eaa068"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ec315b598a924836aa19edc9ead4b3d6"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "517e1f8ce5610edb94d7dea4bede4428"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a8423ca328ec0302f04a49ca17a7f1f9"
  },
  {
    "url": "page-data/cv/page-data.json",
    "revision": "49dbc2f540fd21d371ab30a5fb334209"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d79b6a8c59ee6f8d80bda27c8ecd610f"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/sq/d/1937642695.json",
    "revision": "ab921476dfb2d5d6676784ebacbc58bf"
  },
  {
    "url": "page-data/sq/d/3575165810.json",
    "revision": "8035f1393f6268f1ae03ab8b8ed15010"
  },
  {
    "url": "page-data/sq/d/604804298.json",
    "revision": "940a83a4a80f29ed1aa081e87afb9a3f"
  },
  {
    "url": "polyfill-04703c259e100a0e6a0e.js"
  },
  {
    "url": "polyfill-04703c259e100a0e6a0e.js.map",
    "revision": "adfbfda51aa2ca372477cf54846f38f2"
  },
  {
    "url": "static/34b7d764ee8cf38d0bfc5e2ce00efc4f/25974/tetris.png"
  },
  {
    "url": "static/34b7d764ee8cf38d0bfc5e2ce00efc4f/353ae/tetris.png"
  },
  {
    "url": "static/34b7d764ee8cf38d0bfc5e2ce00efc4f/3e7c2/tetris.webp"
  },
  {
    "url": "static/34b7d764ee8cf38d0bfc5e2ce00efc4f/434da/tetris.png"
  },
  {
    "url": "static/34b7d764ee8cf38d0bfc5e2ce00efc4f/6ffc9/tetris.webp"
  },
  {
    "url": "static/34b7d764ee8cf38d0bfc5e2ce00efc4f/7468d/tetris.webp"
  },
  {
    "url": "static/34b7d764ee8cf38d0bfc5e2ce00efc4f/tetris.png"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/05343/profile-image.webp"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/06c83/profile-image.jpg"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/0b742/profile-image.webp"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/5cb25/profile-image.jpg"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/7d80e/profile-image.webp"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/802e2/profile-image.webp"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/a358d/profile-image.webp"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/a7eaf/profile-image.jpg"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/abb82/profile-image.jpg"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/d1fcc/profile-image.webp"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/dc641/profile-image.jpg"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/fdd35/profile-image.jpg"
  },
  {
    "url": "static/83175a858a2629160d2736e842fd371e/profile-image.jpg"
  },
  {
    "url": "static/banner-02f312861b10464f7b2c64ca4f769074.png"
  },
  {
    "url": "static/c57821defb9d133f97dc1be30561c398/25974/spotify-remote.png"
  },
  {
    "url": "static/c57821defb9d133f97dc1be30561c398/353ae/spotify-remote.png"
  },
  {
    "url": "static/c57821defb9d133f97dc1be30561c398/3e7c2/spotify-remote.webp"
  },
  {
    "url": "static/c57821defb9d133f97dc1be30561c398/434da/spotify-remote.png"
  },
  {
    "url": "static/c57821defb9d133f97dc1be30561c398/6ffc9/spotify-remote.webp"
  },
  {
    "url": "static/c57821defb9d133f97dc1be30561c398/7468d/spotify-remote.webp"
  },
  {
    "url": "static/c57821defb9d133f97dc1be30561c398/spotify-remote.png"
  },
  {
    "url": "static/fab9702bd65a057e0f2d3b2612c4828b/25974/weather-app.png"
  },
  {
    "url": "static/fab9702bd65a057e0f2d3b2612c4828b/353ae/weather-app.png"
  },
  {
    "url": "static/fab9702bd65a057e0f2d3b2612c4828b/3e7c2/weather-app.webp"
  },
  {
    "url": "static/fab9702bd65a057e0f2d3b2612c4828b/434da/weather-app.png"
  },
  {
    "url": "static/fab9702bd65a057e0f2d3b2612c4828b/6ffc9/weather-app.webp"
  },
  {
    "url": "static/fab9702bd65a057e0f2d3b2612c4828b/7468d/weather-app.webp"
  },
  {
    "url": "static/fab9702bd65a057e0f2d3b2612c4828b/weather-app.png"
  },
  {
    "url": "static/homer-8244ba2ded6b08c777beeea05cf3d94e.gif"
  },
  {
    "url": "styles.545d35f83b45b442117d.css"
  },
  {
    "url": "webpack-runtime-518c8cb65538f5c1c69b.js"
  },
  {
    "url": "webpack-runtime-518c8cb65538f5c1c69b.js.map",
    "revision": "6214760726dd5c9838e59b8380cc257a"
  },
  {
    "url": "webpack.stats.json",
    "revision": "cff99192925192e02367942e403bbe32"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-c8c1ca11bd69db3cc0fe.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
