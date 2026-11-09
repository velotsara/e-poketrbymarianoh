/* Service worker minimal : permet d'installer l'application sur l'écran d'accueil.
   Il ne met RIEN en cache : les données (soldes, retraits) et les mises à jour viennent toujours du réseau. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',()=>{});
