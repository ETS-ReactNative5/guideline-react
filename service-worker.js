"use strict";var precacheConfig=[["/index.html","ecc7066c5207684e02c8dc3355d78ff9"],["/static/css/main.d1690ccf.css","5a9d60ee844c2194d1c55db8085f286c"],["/static/js/0.13d18228.chunk.js","dd7f4c2d9b1096d08a675204d1455def"],["/static/js/1.820530cf.chunk.js","9cfd162b1150bcd0ce5cf72159779b94"],["/static/js/2.3c57f824.chunk.js","f4f5dd4177aedf1e3f5beeae8002eef0"],["/static/js/3.7cb2a16b.chunk.js","e2d425ed12c2fbc7d6619d93c16f3cdc"],["/static/js/4.36ce023f.chunk.js","a91e41e355ff60234727b806964a2ebd"],["/static/js/5.49d10501.chunk.js","28bc971640e9fc182f466939724a3d75"],["/static/js/6.b6815c47.chunk.js","59f3003ff682bb5037e256232f8f055f"],["/static/js/7.4c2165a2.chunk.js","ab8c2f0ca35c62aa46398f7467f196c9"],["/static/js/8.1ec746cf.chunk.js","2574ace353552e56ecd829f65581fe1d"],["/static/js/9.ecfc430c.chunk.js","3d1ecd0bbecbb89cfbd4e6a7c5b14149"],["/static/js/main.f397fc24.js","7b8c033319105172592b937858b4bdd8"],["/static/media/aboutusbanner.66a3f955.jpg","66a3f955a2d0d399a0c2b0846a351c80"],["/static/media/banner.68f4f34e.jpg","68f4f34e581b84143fbd670b64989704"],["/static/media/brand-icons.29800836.svg","2980083682e94d33a66eef2e7d612519"],["/static/media/brand-icons.706450d7.ttf","706450d7bba6374ca02fe167d86685cb"],["/static/media/brand-icons.97493d3f.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["/static/media/brand-icons.d9ee23d5.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/static/media/brand-icons.f7c2b4b7.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["/static/media/connect.f0c514b6.jpg","f0c514b62a8de5d665711ee82b8498a6"],["/static/media/icons.29800836.svg","2980083682e94d33a66eef2e7d612519"],["/static/media/icons.706450d7.ttf","706450d7bba6374ca02fe167d86685cb"],["/static/media/icons.97493d3f.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["/static/media/icons.d9ee23d5.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/static/media/icons.f7c2b4b7.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["/static/media/outline-icons.29800836.svg","2980083682e94d33a66eef2e7d612519"],["/static/media/outline-icons.706450d7.ttf","706450d7bba6374ca02fe167d86685cb"],["/static/media/outline-icons.97493d3f.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["/static/media/outline-icons.d9ee23d5.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/static/media/outline-icons.f7c2b4b7.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["/static/media/smallprofile-glasses.9f2289f8.jpg","9f2289f8d8d8383937df192ac99f3732"],["/static/media/software.eabaed6f.jpg","eabaed6f5c1496915bd20fa8d55fcb0f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});