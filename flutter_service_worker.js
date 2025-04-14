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
"main.dart.js": "3f604789911c4d02bc23ce6436507f84",
"flutter_bootstrap.js": "94260db6d8c8c33f73ecf9fb8f45b360",
"CNAME": "b69106c8e39e9ae1a563cf4fa87c384f",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"index.html": "d43c80a1dfabfa75a848a9ffb21193fc",
"/": "d43c80a1dfabfa75a848a9ffb21193fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "8a13f41945f2e394dfe3c76f5d239a3a",
"assets/NOTICES": "a31e59b518e19a513e7b6e31ffc0ba33",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "952d2870a05c76661e23f220ecc68689",
"assets/assets/logo.png": "2dac0218a66a566808fef537c2f1372a",
"assets/assets/404.png": "046670ceac1b546e9e6e3d2a76221bce",
"assets/AssetManifest.json": "4e2e40b1029df8565354e072fe462673",
"assets/AssetManifest.bin": "2349153c34d3bf729bd1532c61773890",
"manifest.json": "2c0e9ac8311e0af565050017c1828fd2",
"version.json": "3a1ce95514fddd9a4aaae544eaedf897",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "41ce58dee9f37350f1fa0b954dd781a7",
".git/objects/c2/24aed20531c32a70ee39685e18c639b998cbca": "3175dc1d8ea1981633b50d802fc8dc4f",
".git/objects/80/67d5e722477b77121821d022d65875f18dfcf1": "faeafca5bed8c99fc9878a5a2999f9d8",
".git/objects/01/01500d094821539943bde24ef45c9538fa4b82": "cca9845d23360c2678d552520a109ae6",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/12/e96c0b32ba1ee8fd2153800d464602ac359c0d": "4692fa4221cfa6cf38cd8b26e237d1d0",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c6/3501212a5f99968f47093bcb237b73d6876d8a": "5cd9c3558eff4dae8b9e1b8c8822b84d",
".git/objects/48/59dd295dbeddfbeaa835d0ae7a1821bd3e0844": "1286acf94bdd3639ced10c270d900bbb",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/be/b1862f5cb09d451663f9895243d70c3189f7a3": "3d0d3710bc2df212e4866d46a8c51992",
".git/objects/be/2027f32f88a9ad6620fcf5ee9a1995c8406953": "19fa2c713d2d64759d1c3009138eda0b",
".git/objects/9b/ac5119af5692ac8021df5fdbd8e3b3210dd860": "de2571d39a20b6ee513c2547271e3806",
".git/objects/ae/e74f1048d1192a75281e65eecb342cdf7a6944": "ec3fa4e44f173015f0eec0461a4a18a2",
".git/objects/2e/906ae58c0e4c7c06b14818a93426cf24e974bd": "17eef37640e99400931cc4345e42aa4a",
".git/objects/7d/c5cd0a35d419a172ea2171609a5ba19c68584b": "fc0c1e9d6b40c74970cfe966f4ce0777",
".git/objects/57/b2c91814613c8b7cd525f2fb4cba4ea3bf35c2": "13c6234200b6bd32f26699777d88cb91",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/9c/500333f4bfdb0148fc86b51fa51fed4b3c1e64": "418fded251add514eb7a07e0a4c1cd06",
".git/objects/39/0f61a74d9cb1c8721993e7008b1d44c0ed1e05": "59c67850aaf5a67ff0e27086919d8bf8",
".git/objects/8b/23505bae4fcb5658b5c2b29280a54b0e902e8b": "3056d7121cc6d394a8b83510d45ac470",
".git/objects/95/d39c6000e4d89d15bcdc124157ed01a7bc037c": "11339c797092c02a1e034ded6c5672fe",
".git/objects/86/0b5dba536771bb5256cfa860b85c893b92cb31": "ca03a0c68cccb0671f9437aa3253ed74",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/18/87daf2e71b1769c6620a104beba3f9243bafdd": "a79c0fcb49d00b9697e541b7576d05c8",
".git/objects/a7/a69dd845d1553c5d4c31e0d1cae76650294959": "5a71b647fb17f65429b8c40a6de3f8d7",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/1b/ff006795ea8cc107897ba00508ac6d8a2ed057": "cae706b6cc10619cf1ee92da19d18f0d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/0b/8eea933183dd3b8723f7680a8e967c9b55c3f7": "d58b05343c648caca974497901295958",
".git/objects/0b/d53285f9b2ff3f8ae3a49c9fbd8876847df5e3": "ddafeb99b3bc38caa7f296677f158813",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/22/96b193e2cc2daa3695c626cd51a004527659a3": "04b0b62827c1cb3320e63e3ff45e32f5",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/3c/069e84c88f4753deca32a8f6d140968cf9fd7c": "bbb9c79de8885461c3413adae8df7819",
".git/objects/47/56c586edd8663ebc5c05afa315d057ea68efc5": "480c11ebde120262a8416fa7ef5761a3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/e63e8ab52968479dfa483af120a1d8af451720": "30b2b43fa8038f08b1578e143d221d4e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/16/863549b2b643e2848a50dda47295a1b39f3ce7": "471a2c9482caf51a2774d75cdead4100",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/da/f79a8755a7751489d26ffeda90a3af7774dc67": "dfac1ed9a0545d4abeeb4518235c5267",
".git/objects/da/3d3718973012c0f9606ddf0dac562c82e09044": "6c6872f83739767559cd148b5e18599a",
".git/objects/99/587bb16fc4a893a254a3b8e1587931cd9e2931": "375deac1bf273cbd597c25f79ee5ca3f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/c4/9ab2669bb213168db94690f227def59a9681bd": "5568241668976fdc6cd926ec58039a69",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/1c/62e85ebcd69d65e53bd09e4b72490ab0110bf2": "86b642b39b793604a26419eb0dbcbcf0",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/1d/f250e7aad9e1a590aa020d78697d190f84ca25": "303a28d33f6ee232c74e0085b1df4b13",
".git/objects/de/4bc110696fdb0de3ed9fd2dfab82d028fae387": "296c211818dc000b3da75dfef2d0981a",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/refs/remotes/origin/main": "1d876a8f66082e8c28993bba3218f8b1",
".git/refs/heads/main": "1d876a8f66082e8c28993bba3218f8b1",
".git/index": "338c9f4a5b0c466c84ccf0d9f52834dc",
".git/COMMIT_EDITMSG": "ca2331b44ce6286d4566dce5ab4e7ecb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "b4483fbc58130e305f29e812917b58b2",
".git/logs/refs/heads/main": "d722b19ee92a10070a438a0e6571a764",
".git/logs/HEAD": "d207134cdeafc1c9174e1d5dcd4f142c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5"};
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
