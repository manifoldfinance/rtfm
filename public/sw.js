if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),g={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>g[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-356efa50"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/170-730deb9cadb4fae0.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/190-f4075d0beefb101e.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/222-e5e4eb2c9d2ec354.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/361-6805eb7ad9ae97a7.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/373.56fe182a33be7281.js",revision:"56fe182a33be7281"},{url:"/_next/static/chunks/548-4c7d00429ca7331a.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/673-a5da6faae76f9a23.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/685-00eaf189776e499f.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/infrastructure/page-f991ea6a7c27fc42.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/integrators/page-33aeaaae5a38f7a1.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/layout-c52a75d7dcd0b292.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/legal/page-9e3eb3e43c3f85a9.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/lending/page-952800b57a2ecc5d.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/markets/page-f25f1ebd34468023.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/metrics/page-2225e3f8d5579087.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/not-found-c8373eb81b8eae63.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/page-6bd3f11930ba35b6.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/protocol/page-051b323ae895960e.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/quickstart/page-f48581ecb10f0075.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/rates/page-23b84d69382d78e4.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/sdks/page-022348c6e0924ae3.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/services/page-2bff70d7dcb202b7.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/specification/page-ec9aa2db0f177584.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/staking/page-0c94bad7a6f49f5c.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/app/vaults/page-4eb0d619769373eb.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/fd9d1056-0462299d818c8abc.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/main-056871995d59a281.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/main-app-fd4210cd9a5314f1.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-07c77edc5254d058.js",revision:"f1FBiZU9g0d_n9DRgXXLz"},{url:"/_next/static/css/c3b29fa103e433c6.css",revision:"c3b29fa103e433c6"},{url:"/_next/static/f1FBiZU9g0d_n9DRgXXLz/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/f1FBiZU9g0d_n9DRgXXLz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/favicon.e74844fc.ico",revision:"bb73d1fed13f4ea8f958d9e6e9e6d8fe"},{url:"/_next/static/media/go.4a1a310b.svg",revision:"80e1c4b95790a212aef74bf3720cfd8d"},{url:"/_next/static/media/node.9b20f647.svg",revision:"46f7defd953aa5e50c87e50527bc3210"},{url:"/_next/static/media/python.ab26a920.svg",revision:"74682c39d97e4a585da8bab7d8e243e1"},{url:"/_next/static/media/ruby.4c6b71be.svg",revision:"a471cd72564f65f0641af4e1f4d11302"},{url:"/_next/static/media/solidity.859c8fa7.svg",revision:"e729e3caf17d45b1e9d3c6095c002d58"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
