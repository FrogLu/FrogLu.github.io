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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "036abe7a23bec5d5406ebf9242e189ef"
  },
  {
    "url": "assets/css/0.styles.880d747a.css",
    "revision": "37ac34533c57a2d9a70a89c1c6bbdf11"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1d3ef236.js",
    "revision": "4ef8051524cbbeff51b7bd064135020e"
  },
  {
    "url": "assets/js/11.5ad2303d.js",
    "revision": "f9759e669feeec472621421fdce6a18d"
  },
  {
    "url": "assets/js/3.d33b6324.js",
    "revision": "0d12da5ad4980238b6c88de553fc4577"
  },
  {
    "url": "assets/js/4.11e6c145.js",
    "revision": "7083caa262e46117b902e004f6ccfed5"
  },
  {
    "url": "assets/js/5.2af5a774.js",
    "revision": "40f7cfd284d8ed0e6228e5359e26ab31"
  },
  {
    "url": "assets/js/6.1abda80e.js",
    "revision": "1d5c7b0d27a9b54efbefd9bd8edde013"
  },
  {
    "url": "assets/js/7.73013fc7.js",
    "revision": "d3047987288a3069e54743ca95053d87"
  },
  {
    "url": "assets/js/8.a20f9f3f.js",
    "revision": "b3d2098f551f006cd1614ab8a57d195f"
  },
  {
    "url": "assets/js/9.4b9057f6.js",
    "revision": "862bfd5d56df4cd283bf9617cab10289"
  },
  {
    "url": "assets/js/app.5cd958a4.js",
    "revision": "7f0d53d8eaf02b188a2c16e61692aaae"
  },
  {
    "url": "assets/js/vendors~docsearch.c27013e8.js",
    "revision": "da22d3ae3bd3b21b759254ab0a6c92da"
  },
  {
    "url": "Cpp/functionParameter.html",
    "revision": "14a13019bc826ec625135ef45effb162"
  },
  {
    "url": "Cpp/lvalueRvalue.html",
    "revision": "dd0805f4bb33c08d1e146618b316cbc6"
  },
  {
    "url": "Cpp/MoveSemantics_CopyElision.html",
    "revision": "f7fe4ca3bac2f03c70ef4e79c302c014"
  },
  {
    "url": "Cpp/sizeofVector.html",
    "revision": "734b2210056d15ff136ba11512594906"
  },
  {
    "url": "favicon.png",
    "revision": "47a58b779e15cad57ffe733396424fbb"
  },
  {
    "url": "index.html",
    "revision": "c7f6b617f20823b65440eb1a946f7643"
  },
  {
    "url": "Others/Summary/2018.html",
    "revision": "23352cd67e8279978cebf24a350683a9"
  },
  {
    "url": "PAT/index.html",
    "revision": "d6bb9c62fb17a20766feaf5037fa1e7e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
