'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "7cd7590101428652ed5b47b9c915bc29",
"flutter_bootstrap.js": "92af39aad08df73f74da17eca341a9b9",
"CNAME": "d41d8cd98f00b204e9800998ecf8427e",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"index.html": "e9b217982f7bcdb19d8117058da178fe",
"/": "e9b217982f7bcdb19d8117058da178fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/asssets/title_5.png": "62af864d0feb6987dbab6788d617ad06",
"assets/asssets/bg_1.jpg": "b581e008c6d564969b71f56665445fe5",
"assets/asssets/cast_2.png": "4fd1bbc20be1b7073a972c4874935339",
"assets/asssets/title_1.png": "127c4af8eb103c8727545d3e7b1ed0d8",
"assets/asssets/title_4.png": "9e1f0d1fac8ca68cb39f9d363b516c73",
"assets/asssets/movies_icon.png": "6a2502364ccec88bb97b537d8537a3aa",
"assets/asssets/bg_2.jpg": "5c4e7861ee192c2e01590e770b4c9dbb",
"assets/asssets/banner_5.png": "eff69110a8f58260784b5686e29cc91f",
"assets/asssets/banner_3.png": "49d19d1c4b70d1fd53a68e960fa3c9c0",
"assets/asssets/cast_1.png": "db4ccdadfa9723b7e013ef00e406f715",
"assets/asssets/title_3.png": "47170d0eb220843f8ef5084926d82929",
"assets/asssets/banner_1.png": "041e8650d8f94e98ad5f8e88d91dd7fa",
"assets/asssets/google_logo.png": "4d3497827d9d24123218829bf9126c9b",
"assets/asssets/logo.png": "d81d7cf0aecdc47865db9a58382df37f",
"assets/asssets/cast_5.png": "e13419fa9dc1fe518adfdcdac7c5ef38",
"assets/asssets/title_2.png": "c552b598ad472289c05b83f2b30acb43",
"assets/asssets/banner_2.png": "21f5b08c64d7c681a7cd77cac646db7b",
"assets/asssets/cast_3.png": "9c1a66b92ababf684aa665b1e187b1c7",
"assets/asssets/banner_4.png": "df21f6343ea62157a9a1be20a491df9a",
"assets/asssets/shows_icon.png": "dd61459e8d415899f952dd8f05628ccc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "ec009adc7a047154062b24072346ff81",
"assets/NOTICES": "4af2bfd8da8b6d900766df5c43fb0f90",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "53b00dd78eb0972f756b711a7c403c0f",
"assets/AssetManifest.json": "d150ceb1bfdbdbd17c219fef1fdd0728",
"assets/AssetManifest.bin": "ccb43acb76ba72fb9d3184ea22742aa1",
"manifest.json": "2c0e9ac8311e0af565050017c1828fd2",
"Cname": "b69106c8e39e9ae1a563cf4fa87c384f",
"README.md": "628e5f2645b0211db47f5fd4e49a7a8c",
"version.json": "3a1ce95514fddd9a4aaae544eaedf897",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "41ce58dee9f37350f1fa0b954dd781a7",
".git/objects/13/5f3c6149562212c6fed8070d2fcb066a6d8645": "764276b51d158ca23effe506c98ca82d",
".git/objects/34/41f89fe2cf981cfb2e06aba292c1d1cb3f8db6": "955560321c32293c167a3dd7b4fe5a6f",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ca/fdca4657df8583308aa20e8ac62c44005a4112": "c9eabb4cc0c7d0a33894f5a840374bb9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/b2/23f4fe7d1c0258ad687feabdb8c1314eb7b6b8": "2feb8c715d9a83ce2c23c6730d8107af",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/f7/144b0b1af540e2299fea920103b0a8c05372ab": "a25f7f3f3e5c2c43189a3d379227886b",
".git/objects/75/70f2659f5a061ca39275e2cbe4c07695d82209": "3824ab32c0937976f0f4016b9865640e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/55/8e6d955c0f003931d1ded7184ec9e27262369a": "dd1adaada022c118cde9ae7cbb95c3b4",
".git/objects/26/93da0df9686397940b235ee569d4da5a51b680": "f19e5e344a4a5f11a838b74df802e0c7",
".git/objects/eb/e696d38b7be97c30013bf6f4acf9697c93d6ee": "37e7cb4fb877eb9227d795a8816bba60",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/7767db6d76c8170edc74c696754a8ea94d5fc3": "e65e5f439eed660c77bdc83cea8ad9be",
".git/objects/36/e70363d4f4983a4d6f4c655d079390ec41b6eb": "307242806fa7065159393edffaca7cfc",
".git/objects/91/6d598052fc8a5aceda8f629be62caf9eb3e520": "85faf3bba063f9809a0e6e2afd77aba6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/be/997904f8ad72c25adbb8b93db7f2099b23c47c": "6efce2b485f93857d0469c279c1698de",
".git/objects/2e/c96571de4c6af42963bf295c6c02164802ef9d": "b77763f0a48f19fbba89b433053a12a7",
".git/objects/2e/906ae58c0e4c7c06b14818a93426cf24e974bd": "17eef37640e99400931cc4345e42aa4a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/2d/1ebea363c4698d95e978b912c27112811c834b": "8d625c2e8ce8d7373b02093aa95162f5",
".git/objects/64/dde71775685f622954a6e2f9f2398a5f690185": "03661fca2372ff2356b6ccc2fcb8b5af",
".git/objects/77/2300538b0e4a65ed5c93aa0f0fcc3bfb50ee14": "081c017ddde886a8035d43259d87ec88",
".git/objects/25/90262e2a09368c9254ea736d89b8124559710c": "f7d1d91f42747df68a3b28c37f78ea97",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/62/fd3d9b3c45a44ff6c0163eed8d765b9afb48f8": "d3077ffdcfcf51e3f7676e7bd4cb530e",
".git/objects/03/9265a0358695f19f2349ee3baa2822e3e49458": "bfeaea4cb31245d5a29325b2ca58bcaa",
".git/objects/18/7c17c1cc7f7be2ba21498fef1408754e64cd86": "922b4aef9c2a4553d5bcd9d872876295",
".git/objects/8d/6fb34866d0f9a5a7209cd1408b3837ab1c3b30": "0a3471e7f332a2480c5a551e2fa5cf2a",
".git/objects/6a/87d131eb4d6ccf3ed536bf9198706b98bc4368": "9f69ef774c915be998c9b0be4f9bbee9",
".git/objects/a7/05764365a1bfe8d17c66976bfd34b24f943ebb": "daee0ff354e054ebd7e8df1b1e6ecbcb",
".git/objects/38/5632f12da05f77c17acec9f2b216632a8a2d11": "9c6f4c6be30ca28f3ee48d45de5e3e78",
".git/objects/38/dc5574316901a3d88b515f06cdd919ffca042c": "ea8a00bfc83044486452a8b4709a1f10",
".git/objects/38/b4b7913d3f34ca711f8b806a9568a41d0cc7cb": "8a7766deddfd6ae6021798a80766e46b",
".git/objects/d6/09baf367f2a6673a19c5ccfc5980ac5dbc18f5": "15b3eb65a6c918696561b05b3067c5dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/7b/13fa25366856390e5f53fdd7cfb029991df6ec": "4102192d7e26a1f0e613d5e7830cd3ed",
".git/objects/0b/57ad4e2300f50635afe10717efaebdcac41085": "44ab8c561374a561252b3e7dcec8380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/22/96b193e2cc2daa3695c626cd51a004527659a3": "04b0b62827c1cb3320e63e3ff45e32f5",
".git/objects/71/329bc05815b24b36234676bc24399db01936e4": "a14a53931631f4e8b2f4180bc965018b",
".git/objects/f5/32f04d93ebf78838b05f3175d9de6c6b590402": "1187c78798c1ad2b46e2f011b8a77c2f",
".git/objects/68/72783cf6a60d09e0f275a992f887f0981f041c": "4836a5a73cc31376a045594cf03e4d39",
".git/objects/94/3247cb3512457c13236675e4edc4b7ac0447be": "0dfbcf63b3d9154b2d36941a4406b322",
".git/objects/66/8b963fe626d58fd46cc759140584a899160b25": "898081e5be131468805063bb2c1435b8",
".git/objects/ea/bfd1488d068e9282ec7d86bfd13a2f4f363461": "6e83340f9c01c4645a6f33dd15002601",
".git/objects/d8/04bccece15995efe587d59a2e8e370dcbfc68d": "1035046d80bb41ba207f921c6e242002",
".git/objects/10/45ea43ab2e6b1409dedc2cac4bd07175ec7d58": "e9313ef3a77838707b9d518913a05312",
".git/objects/15/9356b65f2921b0ba620b178d3d4facee67eb32": "a1fe6ed8706ed5876dffac23fa99e261",
".git/objects/d9/2f795197ab097a00f6d02b11d77cc5ca6695fc": "fbe5bc68f439d7a75e7d5ab68343dd0d",
".git/objects/17/5e3fb2a0d068c2d87f658707d2153d6414986b": "aeb224b654f4f337bc0d0d150e4d4a9f",
".git/objects/db/be16942eca3698759c648baaed1dfd66966923": "9584f3d9bba92fb49dee22e7c09ef0ee",
".git/objects/db/f75de54fe1eb602d7fa268be4ad9ad5441f217": "f401ed2730aeb2c49e46c0ae8993985a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/54/f303d786be96b936a76c11aee2efd99d77ae97": "a5721c4391e51fdc1ce2ca38d9aa100d",
".git/objects/ac/c4dfebd47f572d93d0edb283fe5a4b9a946792": "1770dd93194e5a9c6ffe6205958386d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/da/3d3718973012c0f9606ddf0dac562c82e09044": "6c6872f83739767559cd148b5e18599a",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/99/071f6d8e7be77d717a8835350d9d82cf57b157": "b2abce5c81085371ca33f787a6864370",
".git/objects/99/68bcc04b06d44d071307dd913244cd9cf13830": "107e49ccee15056a690f190d7992dbc8",
".git/objects/5a/afe0a9c39318a4b48d5c30dc5dc9e7e754788a": "fc0b9cc87567065e208d5eba6249e1f4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/c9/ea7c1797920f0be7901c5a96baf1bb41d271b9": "8ae522015442ff3ba7ec77fdc6f6e4d3",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/cb/ce7ba831c51850dc68e7d99f18de4d92d93bcb": "05e99ca0cddf7f82f171eb28a4a6b93b",
".git/objects/cb/3eb011a0b3f68617e8203835613bbb45a0d806": "c39676eaf48ce97c1473d0b51c52e4a5",
".git/objects/0c/85e64911f9b6b87a8a60829d563abf508d518c": "cebb027e7437b00e0d3484952de8fd13",
".git/objects/bb/24ce4fa3d2626ae42d1557bacc719d52fe3ee4": "d09de6f7b38a4b919c59d9754d0719ad",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/1c/374a108d9b8ea39d126771b0e265ccc631ef7d": "f57e99bb78d27ee4b9fa809645f14275",
".git/objects/1c/60ed37799469c537162ad9bec0704968c5a732": "3a8c03d5a786c708493b89b1f4207055",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d0/14440c873d37d50a22dc08c8149c8dc2f44335": "d88fd12ed24f54e74745cfb36fc21920",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/8e/d6bd14385de9e9d388cce281c8e0e81336b5d8": "01a1cd1fc6c554957f3f6aa0721598b7",
".git/objects/97/64f7ec4e06b8bf1039513f2dfffda6ddf24536": "82fb6ba15df55c696c7cda25bd0eb107",
".git/objects/67/967b044dfe99be3991b9b0015b78468c2a8885": "fc1cfc35682ccb7ff34585eabc846d39",
".git/objects/bf/22088cf997c09eb1b4e1706fd0b032c949bc65": "9adb84bc948c2d8b644463b66a5d278e",
".git/objects/ab/59d23543ee49b2d3caece0605875ee6d2665b9": "7d99f21055f6c5d27d72c8bf3f89b478",
".git/objects/ab/ffde4be88b90e8ded9e4a1046fd157d0e8def2": "f431294088508b36d992315db3411607",
".git/objects/30/472f50cb8eed9cfd16a50b9284fd1aaed04e48": "e8a3426e04c82807c3832c48f344624d",
".git/objects/30/973d7e299fa9cdcb335fbd002c39fb2913680d": "638852df7edb32a809eae796c3590d5e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/dc/aa196e4aa565054fe7c2d5e70674d59ee38563": "7d7ec75db7b0a22015be22b274fd92ef",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6e569055d29bc9e8b27a82996ea68aef4bcdc7": "179ec36eb5052b5274741ddfb22169ca",
".git/objects/4f/3f34605972c87ff726379c825cf7281c141b28": "1b81598c37924b977ca73bf680fc5d21",
".git/objects/5c/bf4b9d86e92bbf33e6202b316f8d6d8d78df87": "6bbef74e8ecf15c61a997c281bfaf95b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/78/75985c6e7e8917834d1de9e04928212f31c148": "9630b2a7b9f245e40af1e4359d104e03",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/refs/remotes/origin/main": "26ae53d7fccf92178fc13a64e021805a",
".git/refs/heads/main": "26ae53d7fccf92178fc13a64e021805a",
".git/index": "58cc482467b52b312f86a431c6ffd660",
".git/COMMIT_EDITMSG": "ad76098d51b8ef8e6c871009c2e99041",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "93cc3bac94a01be435cb25b05fb11ccd",
".git/logs/refs/heads/main": "6a5c8cf952e5e9b7698e6830735a723b",
".git/logs/HEAD": "460ff0be1461e3995f2a659b43ea6825",
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
