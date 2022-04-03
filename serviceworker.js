const CACHE_NAME = "ver-1.0"
const CACHE_FILES = [
    "./index.html",
    "./index.js",
    "./index.css",
    "./favicon.ico",
    "./images/icon-192.png",
    "./images/icon-512.png"
]

// インストール可能にする
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll(CACHE_FILES);
        })
    );
});


self.addEventListener("fetch", (event) => {
});