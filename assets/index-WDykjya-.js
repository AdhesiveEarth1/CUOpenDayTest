(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="/CUOpenDayTest/vite.svg",c="/CUOpenDayTest/tailwindcss-mark.svg",d="/CUOpenDayTest/typescript.svg",o="/CUOpenDayTest/cu-logo.svg";async function f(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function m(a){const i=document.querySelector("#app");if(!a.topics){i.innerHTML='<p class="text-red-600">No Open Day data found.</p>';return}i.innerHTML=`
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${l}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${c}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="${d}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>

    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${o}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
      </div>
      <a>
        <img src = https://cardiff.imgix.net/__data/assets/image/0007/1380454/main-building-open-day.jpg?w=800%5Cu0026fit=crop%5Cu0026q=60%5Cu0026auto=format" alt= "Cardiff University Main Building" class = "h-32 w-full object-cover rounded mb-4">
      </a>
      <div class="bg-cardiff-red px-0 py-6">
      <div class = "customwidth">
      <h1 class="text-3xl sm:text-5xl px-2 font-bold text-cardiff-white mb-8 text-left">Cardiff University Open Day</h1>
      </div>
      </div>
      
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-2 ">
      
        ${a.topics.map(t=>t&&t.name?`
          
          <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
            <img src="${t.cover_image||o}" alt="${t.name}" class="h-32 w-full object-cover rounded mb-4" />
            <h2 class="text-xl font-bold text-cardiff-white mb-2">${t.name}</h2>
            <p class="text-cardiff-white mb-2">${t.description||""}</p>
           <!-- ${t.programs&&t.programs.length?`
              <div class="mt-2">
                <h3 class="font-semibold text-cardiff-dark mb-1">Events:</h3>
                <ul class="list-disc list-inside text-sm">
                  ${t.programs.map(s=>s&&s.title?`<li><span class="font-semibold">${s.title}</span>${s.start_time?` <span class='text-xs text-cardiff-dark'>(${new Date(s.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}${s.end_time?" - "+new Date(s.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})</span>`:""}${s.room?`, <span class='text-xs'>${s.room}</span>`:""}</li>`:"").join("")}
                </ul>
              </div>
            `:""} -->
          </div>
        `:"").join("")}
      </div>
    </div>
  `}f().then(m);
