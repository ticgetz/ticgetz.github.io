'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "427f2a4febda76c1a9ddebbf23da14c2",
"flutter_bootstrap.js": "0628b2a1beb47fd56ed32cb0732bfd67",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"index.html": "235d17f6f295becbda59e3cbde9ea4c0",
"/": "235d17f6f295becbda59e3cbde9ea4c0",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/discover.png": "8fb5c3dd58ffb198644a9aac0d0a5da2",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "64dd58b0f24ee7bf272d964f508660bb",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "99f1d408e289af3e6359feffc5abc003",
"assets/packages/flutter_cashfree_pg_sdk/assets/jcb.png": "903e2793c61fc15e48fed184d6eadbe7",
"assets/packages/flutter_cashfree_pg_sdk/assets/maestro.png": "49f3167896883d38eb9770f6527fa961",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "3442819455f79b208c50094bae6843e8",
"assets/packages/flutter_cashfree_pg_sdk/assets/rupay.png": "b6c88a3273204df54bc46e374b633570",
"assets/packages/flutter_cashfree_pg_sdk/assets/diners.png": "6bc0a26fbe98312d2cde3ca06a9b9518",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "18418f1d458984bc06a50a3d354a53c0",
"assets/asssets/title_5.png": "62af864d0feb6987dbab6788d617ad06",
"assets/asssets/bg_1.jpg": "b581e008c6d564969b71f56665445fe5",
"assets/asssets/cast_2.png": "4fd1bbc20be1b7073a972c4874935339",
"assets/asssets/title_1.png": "127c4af8eb103c8727545d3e7b1ed0d8",
"assets/asssets/title_4.png": "9e1f0d1fac8ca68cb39f9d363b516c73",
"assets/asssets/movies_icon.png": "6a2502364ccec88bb97b537d8537a3aa",
"assets/asssets/temple.jpg": "3e7c976c42851e623c8f5d74cdde8932",
"assets/asssets/bg_2.jpg": "5c4e7861ee192c2e01590e770b4c9dbb",
"assets/asssets/museum.png": "8121df45132729bb1672bf331d7c2349",
"assets/asssets/banner_5.png": "eff69110a8f58260784b5686e29cc91f",
"assets/asssets/banner_3.png": "49d19d1c4b70d1fd53a68e960fa3c9c0",
"assets/asssets/cast_1.png": "db4ccdadfa9723b7e013ef00e406f715",
"assets/asssets/fund_raising.jpeg": "beb286373251ea4f887f22f8508ec9bb",
"assets/asssets/title_3.png": "47170d0eb220843f8ef5084926d82929",
"assets/asssets/banner_1.png": "041e8650d8f94e98ad5f8e88d91dd7fa",
"assets/asssets/google_logo.png": "4d3497827d9d24123218829bf9126c9b",
"assets/asssets/logo.png": "1e9559005956b3b1fb26ccc506fd3b61",
"assets/asssets/cast_5.png": "e13419fa9dc1fe518adfdcdac7c5ef38",
"assets/asssets/title_2.png": "c552b598ad472289c05b83f2b30acb43",
"assets/asssets/banner_2.png": "21f5b08c64d7c681a7cd77cac646db7b",
"assets/asssets/cast_3.png": "9c1a66b92ababf684aa665b1e187b1c7",
"assets/asssets/banner_4.png": "df21f6343ea62157a9a1be20a491df9a",
"assets/asssets/cricket.png": "d0a936ead15866217799767060469cf4",
"assets/asssets/404.png": "046670ceac1b546e9e6e3d2a76221bce",
"assets/asssets/shows_icon.png": "dd61459e8d415899f952dd8f05628ccc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "00de7de3e91bf7637dcd74b531d66532",
"assets/NOTICES": "aabe063cce36669e92b530762d1fb3b8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "04fd2d991129ed2d4eb178751f05cb4f",
"assets/AssetManifest.json": "136c3135db990e11448467effafee65f",
"assets/AssetManifest.bin": "de6810ebb3cbad9b1f485ff1b1ecd2aa",
"manifest.json": "2c0e9ac8311e0af565050017c1828fd2",
"version.json": "3a1ce95514fddd9a4aaae544eaedf897"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
