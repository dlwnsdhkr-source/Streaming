self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 영상 스트림·다운로드(workers.dev) 요청은 브라우저가 직접 처리하도록 통과
  if (event.request.url.includes('workers.dev')) return;

  event.respondWith(fetch(event.request));
});
