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
    "revision": "cb862be293bc1edf5d3ab2e10a5a42f1"
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
    "url": "assets/js/app.5da8f261.js",
    "revision": "6e4fa931b2f7e721851a743ca83341b1"
  },
  {
    "url": "assets/js/vendors~docsearch.c27013e8.js",
    "revision": "da22d3ae3bd3b21b759254ab0a6c92da"
  },
  {
    "url": "Cpp/functionParameter.html",
    "revision": "1b80015d0fdee977d33ead9b8c8e2c93"
  },
  {
    "url": "Cpp/lvalueRvalue.html",
    "revision": "cf4cd474ac1d6f3cd4e2e241b00446ea"
  },
  {
    "url": "Cpp/MoveSemantics_CopyElision.html",
    "revision": "3560f1eeb7c55c1a89e8ef6f3956c0b7"
  },
  {
    "url": "Cpp/sizeofVector.html",
    "revision": "56561d0a2250daa812e7a7ca83b3f6ac"
  },
  {
    "url": "favicon.png",
    "revision": "47a58b779e15cad57ffe733396424fbb"
  },
  {
    "url": "index.html",
    "revision": "8c4208d4c8a9531e8499592699f98330"
  },
  {
    "url": "Others/Summary/2018.html",
    "revision": "f1f417af62994734291b4e5c05dc817c"
  },
  {
    "url": "PAT/index.html",
    "revision": "78e2a331cc9cdc8245f4800a2751b323"
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
