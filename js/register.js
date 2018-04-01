if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js',  { scope: '/pwa_test/' })
    .then( _ => console.log('Service Worker Registered'));
}
