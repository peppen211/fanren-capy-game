const CACHE='ashen-oath-shell-v16';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg','./assets/sprites/ashen-knight.webp','./assets/backgrounds/ashen-courtyard.webp','./assets/monsters/ash-wraith.webp'];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==location.origin)return;
  const url=new URL(request.url);
  if(request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname==='/'){
    event.respondWith((async()=>{
      try{
        const response=await fetch(request,{cache:'no-store'});
        if(response&&response.ok){
          const cache=await caches.open(CACHE);
          cache.put('./index.html',response.clone());
          return response;
        }
      }catch(error){}
      return (await caches.match('./index.html'))||Response.error();
    })());
    return;
  }
  event.respondWith(caches.match(request).then(hit=>hit||fetch(request).then(response=>{
    if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}
    return response;
  }).catch(()=>caches.match('./index.html'))));
});
