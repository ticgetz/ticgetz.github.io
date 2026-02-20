'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "36fc69cffcea0914bda1670b6cfde217",
"version.json": "9b9e35bec5bbb8faecb1c3597ef669ee",
"index.html": "6b66002407f4d1f8fe8b2f3c05ca5323",
"/": "6b66002407f4d1f8fe8b2f3c05ca5323",
"main.dart.js": "7ff2576657a18ff9cd9e1ffd9bd84183",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "e9254281f571f5e7cdc591c542692946",
"icons/Icon-192.png": "f815faa15a4b671c2aea42bd39afcce5",
"icons/Icon-maskable-192.png": "f815faa15a4b671c2aea42bd39afcce5",
"icons/Icon-maskable-512.png": "860e214d062007b29d68bf18f302eac1",
"icons/Icon-512.png": "860e214d062007b29d68bf18f302eac1",
"manifest.json": "4e89de70f484192238cf796390d81307",
"assets/AssetManifest.json": "bd5a5fce74d265d694a6aea19b1d54bd",
"assets/NOTICES": "c08d5d65c11482724c7d1c97a5ba1dfd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "9ddaeb2a7d630c36f3a0f27bf41dbe35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "60fe487641861cb2b6892c6fadb98a3d",
"assets/packages/flutter_cashfree_pg_sdk/assets/discover.png": "8fb5c3dd58ffb198644a9aac0d0a5da2",
"assets/packages/flutter_cashfree_pg_sdk/assets/rupay.png": "b6c88a3273204df54bc46e374b633570",
"assets/packages/flutter_cashfree_pg_sdk/assets/diners.png": "6bc0a26fbe98312d2cde3ca06a9b9518",
"assets/packages/flutter_cashfree_pg_sdk/assets/maestro.png": "49f3167896883d38eb9770f6527fa961",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "3442819455f79b208c50094bae6843e8",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/jcb.png": "903e2793c61fc15e48fed184d6eadbe7",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "99f1d408e289af3e6359feffc5abc003",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "64dd58b0f24ee7bf272d964f508660bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6201b89176f82e3f396ef52cec3a4746",
"assets/fonts/MaterialIcons-Regular.otf": "1f5922a02e600e18f2c84524fba3333b",
"assets/assets/bhim.png": "e46182085cae59ca1f9d30e6e2d9fe92",
"assets/assets/404.png": "046670ceac1b546e9e6e3d2a76221bce",
"assets/assets/banner_1.png": "6ef801ba4a17fc8e07aece890b616e95",
"assets/assets/profile_image.jpg": "fa5de510e7d80cabb1558094e27d5252",
"assets/assets/banner_2.png": "2b2421dd5301083f9c90840b6adb425f",
"assets/assets/banner_3.png": "d2fe2d8b0bdfc997754e08dab962aa23",
"assets/assets/gpay.png": "f6a6e03b9f230e47a6ec6ffb1c9e2ec4",
"assets/assets/images/ticgetz_favicon.png": "17b55f4ba934f814c6a9a1ea7d318c57",
"assets/assets/gpay.svg": "9f00d434fe296ba9d1c930bad89ea5e9",
"assets/assets/slider_1.png": "8c4c78628f7461ba9ef0bb2f9c444946",
"assets/assets/slider_2.png": "3ec0f3ddfba92972f527279daa52de2d",
"assets/assets/slider_3.png": "07fd568ac207b91efa03168b2c0fd127",
"assets/assets/visa.png": "9266cfc51ce623b5dd190839c7a7f3d6",
"assets/assets/zoho-payments.jpg": "8a0d8fab315216ef0c3f4ad1a18a554b",
"assets/assets/placeholder_banner.png": "ea10f4c83c8495e76c5ce39cd3c7dd01",
"assets/assets/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/invite_illustration.png": "cfe951098875cbc7945e3cf008e745d6",
"assets/assets/event_detail_banner.png": "79ffda665005b16d59aec8e4240e82f0",
"assets/assets/cashfree_logo.png": "6d65e42a11ec1e9cd70b5b49d13f1759",
"assets/assets/logo.png": "2dac0218a66a566808fef537c2f1372a",
"assets/assets/apple_icon.png": "370917998a6fa5845a7a340e54dc5174",
"assets/assets/google_logo.png": "24c22e47b7f198df14783544924f51e3",
"assets/assets/facebook_icon.png": "9dc5ca788a26ee69fca81df1ee2b6f93",
"assets/assets/login_card.png": "f2f09d8eb4f8741b9c05abc5979714b7",
"assets/assets/event_1.png": "dcaf325e6252674540c1b85b5ee68bc1",
"assets/assets/event_3.png": "2e740eb7f0ee233c43b7a07981bf8d98",
"assets/assets/mastercard.png": "3c8a6b28f925e5d65b399f3f93ee013f",
"assets/assets/event_2.png": "1ac1fe027908436adad61ceafc186b2c",
"assets/assets/rate_us.png": "39a602d750715913f87ca7eb8782e4f2",
"assets/assets/event_5.png": "101b08d4af337dddd9add3ef2d0dddb2",
"assets/assets/profile_banner.jpg": "7210f3bb71c52553365806c5f5178ba7",
"assets/assets/event_4.png": "2ee4291cbffcde36c62b4ff75801e714",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
