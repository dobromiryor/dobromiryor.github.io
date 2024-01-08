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
    "url": "_gatsby/slices/_gatsby-scripts-1.html",
    "revision": "50b3b5c56f1d37e104b5d37175731f66"
  },
  {
    "url": "~partytown/debug/partytown-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-media.js"
  },
  {
    "url": "~partytown/debug/partytown-sandbox-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-sw.js"
  },
  {
    "url": "~partytown/debug/partytown.js"
  },
  {
    "url": "~partytown/partytown-atomics.js"
  },
  {
    "url": "~partytown/partytown-media.js"
  },
  {
    "url": "~partytown/partytown-sw.js"
  },
  {
    "url": "~partytown/partytown.js"
  },
  {
    "url": "175-c1e54d2ab8eb26b7f93c.js"
  },
  {
    "url": "175-c1e54d2ab8eb26b7f93c.js.map",
    "revision": "525be5908410d265766e98ad9ee1ab76"
  },
  {
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-a71aef38b436104f44cc.js"
  },
  {
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-a71aef38b436104f44cc.js.map",
    "revision": "d1fa9f2abf8336e43a6d81e93290016c"
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
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-fc9dccc81a6845183a99.js"
  },
  {
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-fc9dccc81a6845183a99.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "1b2ecf7a0eb36778a9cbf560d2ab7d1af7071e9a-fc9dccc81a6845183a99.js.map",
    "revision": "159c4a4a617b5ec8376f36b0a8b22cf2"
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
    "revision": "de9c8b8fd2630a2a8fd8400c5166f5e6"
  },
  {
    "url": "404/index.html",
    "revision": "33355dea35da739011184726b759b138"
  },
  {
    "url": "731-2b0a15b0d724e36eafd1.js"
  },
  {
    "url": "731-2b0a15b0d724e36eafd1.js.LICENSE.txt",
    "revision": "b2a938793c03a627bef3e9442ddf9200"
  },
  {
    "url": "731-2b0a15b0d724e36eafd1.js.map",
    "revision": "a71c3bb44e0a25c3f8eca9a1ebadca6a"
  },
  {
    "url": "843-d05a29d6be69d7e791c5.js"
  },
  {
    "url": "843-d05a29d6be69d7e791c5.js.map",
    "revision": "cbac13317e49de0ed207c95b69eacd3e"
  },
  {
    "url": "app-73b1e75d53f0321ef052.js"
  },
  {
    "url": "app-73b1e75d53f0321ef052.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-73b1e75d53f0321ef052.js.map",
    "revision": "ca5df004e2deb44283f6d86a732b013b"
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
    "revision": "f4046ab40b6baa359c821bd368f7726e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d9e408d24a9c5fb12376.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d9e408d24a9c5fb12376.js.map",
    "revision": "9fb05816811d022d9282646192749e1e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ebc6a06b2e114617d14f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ebc6a06b2e114617d14f.js.map",
    "revision": "45a8da3600aea713d3b1fa1c734facd4"
  },
  {
    "url": "component---src-pages-404-js-11b24ecb219528e3390c.js"
  },
  {
    "url": "component---src-pages-404-js-11b24ecb219528e3390c.js.map",
    "revision": "075c55ea40e6ea7cae03a9a7bb3280d0"
  },
  {
    "url": "component---src-pages-404-js-d2fbb6b3b687067bade8.js"
  },
  {
    "url": "component---src-pages-404-js-d2fbb6b3b687067bade8.js.map",
    "revision": "80e19a6df00e1220bf76586af6844fe6"
  },
  {
    "url": "component---src-pages-404-js-d9102e92105cbcf2555b.js"
  },
  {
    "url": "component---src-pages-404-js-d9102e92105cbcf2555b.js.map",
    "revision": "68ef21a3421d9a8c1c54599bec149343"
  },
  {
    "url": "component---src-pages-cv-js-1d73a6ae333074f84e7b.js"
  },
  {
    "url": "component---src-pages-cv-js-1d73a6ae333074f84e7b.js.map",
    "revision": "87ed44e3a6839c6cb2ddfce9ee2e2232"
  },
  {
    "url": "component---src-pages-cv-js-2217c1bb66a0a5682b47.js"
  },
  {
    "url": "component---src-pages-cv-js-2217c1bb66a0a5682b47.js.map",
    "revision": "9d808e03d05672625c77b115ebf0fe0a"
  },
  {
    "url": "component---src-pages-cv-js-da23c3e97035f01cc6a1.js"
  },
  {
    "url": "component---src-pages-cv-js-da23c3e97035f01cc6a1.js.map",
    "revision": "02a2053f91f9a74e5102d3ab6e3f1d07"
  },
  {
    "url": "component---src-pages-index-js-1552f031b0f61760de40.js"
  },
  {
    "url": "component---src-pages-index-js-1552f031b0f61760de40.js.map",
    "revision": "6aff00efd12b2475fef000536b9f3318"
  },
  {
    "url": "component---src-pages-index-js-2a9d25345f207b034cb7.js"
  },
  {
    "url": "component---src-pages-index-js-2a9d25345f207b034cb7.js.map",
    "revision": "0f1793f103f00d1aa538cced1a783f78"
  },
  {
    "url": "component---src-pages-index-js-6f2bf71d81c315d27abd.js"
  },
  {
    "url": "component---src-pages-index-js-6f2bf71d81c315d27abd.js.map",
    "revision": "32f28d6146c5978aa70db21163ba0d00"
  },
  {
    "url": "component---src-pages-index-js-b26ebffdb1c40bf98f6c.js"
  },
  {
    "url": "component---src-pages-index-js-b26ebffdb1c40bf98f6c.js.map",
    "revision": "2631d685863a8991137e7b28612e4592"
  },
  {
    "url": "cv/index.html",
    "revision": "130838d540ef08009ff70f30666daa6b"
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
    "url": "framework-5a07166f3d3625ed30d4.js"
  },
  {
    "url": "framework-5a07166f3d3625ed30d4.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-5a07166f3d3625ed30d4.js.map",
    "revision": "c8c850b23467f3a40a06cf18b99b9860"
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
    "revision": "f32896a3e651a33aa75851eabcbb1f53"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "33921d9d1a9e332e79ac927060d215a3"
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
    "revision": "6fd8cd4d40998f988fe96d54a6946383"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2ed491a98bc5b3b866faef34b84cb9e0"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "ef6ff5ee3044ca17030550fb9dae6acd"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "aa34f8a1806ff4764c7eaaa77d7845d0"
  },
  {
    "url": "page-data/cv/page-data.json",
    "revision": "b6b41154ab7038699ef7b74a311cc2f2"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "abb0f7049fed6c4b992f158eb9961279"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "e31298c3f4a4caf170486ba2d9289a32"
  },
  {
    "url": "page-data/sq/d/1937642695.json",
    "revision": "0b1a5ee95e9406570383e8ac0b95e937"
  },
  {
    "url": "page-data/sq/d/3575165810.json",
    "revision": "72ff098bf22a0a55c43bae150e567250"
  },
  {
    "url": "page-data/sq/d/604804298.json",
    "revision": "2712503bf10854f37b0a7ac0cf9623b3"
  },
  {
    "url": "page-data/sq/d/844112296.json",
    "revision": "a78a5d73206028c519a39d603c01ef5c"
  },
  {
    "url": "polyfill-04703c259e100a0e6a0e.js"
  },
  {
    "url": "polyfill-04703c259e100a0e6a0e.js.map",
    "revision": "adfbfda51aa2ca372477cf54846f38f2"
  },
  {
    "url": "static/1b5ecc36277c1e0231d006be1ab2648f/25974/yum.png"
  },
  {
    "url": "static/1b5ecc36277c1e0231d006be1ab2648f/353ae/yum.png"
  },
  {
    "url": "static/1b5ecc36277c1e0231d006be1ab2648f/3e7c2/yum.webp"
  },
  {
    "url": "static/1b5ecc36277c1e0231d006be1ab2648f/434da/yum.png"
  },
  {
    "url": "static/1b5ecc36277c1e0231d006be1ab2648f/6ffc9/yum.webp"
  },
  {
    "url": "static/1b5ecc36277c1e0231d006be1ab2648f/7468d/yum.webp"
  },
  {
    "url": "static/1b5ecc36277c1e0231d006be1ab2648f/yum.png"
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
    "url": "static/448d5fd4769ca99a720872f1d76edcf7/yum.jpg"
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
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/089ff/profile-image.jpg"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/0ca45/profile-image.jpg"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/1e792/profile-image.webp"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/32433021.jpg"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/4af6b/profile-image.webp"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/513ac/profile-image.webp"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/7fad5/profile-image.webp"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/8cce9/profile-image.jpg"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/9f194/profile-image.webp"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/a5923/profile-image.jpg"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/ac33a/profile-image.jpg"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/afb5e/profile-image.webp"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/db0c4/profile-image.jpg"
  },
  {
    "url": "static/ec1e162d12873dc9ea4b0ef6b20a2253/profile-image.jpg"
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
    "url": "styles.0e71c727d832cb9036bb.css"
  },
  {
    "url": "styles.545d35f83b45b442117d.css"
  },
  {
    "url": "styles.674389780a6b97693640.css"
  },
  {
    "url": "styles.e25bb0ce917704424468.css"
  },
  {
    "url": "webpack-runtime-0d6b66bd72e4243e2c39.js"
  },
  {
    "url": "webpack-runtime-0d6b66bd72e4243e2c39.js.map",
    "revision": "6b4ef03969bc779a65735eca4287a8cd"
  },
  {
    "url": "webpack-runtime-518c8cb65538f5c1c69b.js"
  },
  {
    "url": "webpack-runtime-518c8cb65538f5c1c69b.js.map",
    "revision": "6214760726dd5c9838e59b8380cc257a"
  },
  {
    "url": "webpack-runtime-d5f42ddc5f814e78da56.js"
  },
  {
    "url": "webpack-runtime-d5f42ddc5f814e78da56.js.map",
    "revision": "8271b110d6d18d4880af39207fae3194"
  },
  {
    "url": "webpack-runtime-dfb2464446752a2e79c9.js"
  },
  {
    "url": "webpack-runtime-dfb2464446752a2e79c9.js.map",
    "revision": "f321593e369c065191ac2870f1050296"
  },
  {
    "url": "webpack.stats.json",
    "revision": "5500ae958c3d20b54a6f239a9621f53c"
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

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
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
  if (!resources || !(await caches.match(`/app-73b1e75d53f0321ef052.js`))) {
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
