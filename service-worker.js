self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("bus-pass-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./assets/app-ui.png"
      ]);
    })
  );
});
