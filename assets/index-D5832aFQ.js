(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const d="/CUOpenDayTest/vite.svg",f="/CUOpenDayTest/tailwindcss-mark.svg",u="/CUOpenDayTest/typescript.svg",a="/CUOpenDayTest/cu-logo.svg";async function p(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function m(e,t){return e.topics.filter(n=>n.name&&n.name.charAt(0).toUpperCase()===t.toUpperCase())}function c(){return`
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${d}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${f}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="${u}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>
  `}function g(){return`
    <div class="filter-container mb-6">
      <select id="mySelect">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <button id="filterButton">Filter</button>
    </div>
  `}function y(){return`
    <div class="filter-container mb-6">
      <button id="backButton">Back</button>
    </div>
  `}function l(e){return`
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-2">
      ${e.map(t=>`
        <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
          <img src="${t.cover_image||a}" alt="${t.name}" class="h-32 w-full object-cover rounded mb-4" />
          <h2 class="text-xl font-bold text-cardiff-white mb-2">${t.name}</h2>
          <p class="text-cardiff-white mb-2">${t.description||""}</p>
          <button type="button" onclick="localStorage.setItem('Subject', ${JSON.stringify(t)})"> Show Event Info </button>
        </div>
      `).join("")}
    </div>
  `}function v(e){const t=document.querySelector("#app");if(!e||!e.topics||e.topics.length===0){alert("No open day data matching your criteria found");return}t.innerHTML=`
    ${c()}
    ${g()}
    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${a}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
      </div>
      <a>
        <img src="https://cardiff.imgix.net/__data/assets/image/0007/1380454/main-building-open-day.jpg?w=800%5Cu0026fit=crop%5Cu0026q=60%5Cu0026auto=format" alt="Cardiff University Main Building" class="h-32 w-full object-cover rounded mb-4">
      </a>
      <div class="bg-cardiff-red px-0 py-6">
        <div class="customwidth">
          <h1 class="text-3xl sm:text-5xl px-2 font-bold text-cardiff-white mb-8 text-left">Cardiff University Open Day</h1>
        </div>
      </div>
      ${l(e.topics)}
    </div>
  `,document.getElementById("filterButton")?.addEventListener("click",()=>{const o=document.getElementById("mySelect").value,n=m(e,o);b({topics:n})})}function b(e){const t=document.querySelector("#app");if(!e||!e.topics||e.topics.length===0){alert("No open day data matching your criteria found");return}t.innerHTML=`
    ${c()}
    ${y()}
    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${a}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
      </div>
      <a>
        <img src="https://cardiff.imgix.net/__data/assets/image/0007/1380454/main-building-open-day.jpg?w=800%5Cu0026fit=crop%5Cu0026q=60%5Cu0026auto=format" alt="Cardiff University Main Building" class="h-32 w-full object-cover rounded mb-4">
      </a>
      <div class="bg-cardiff-red px-0 py-6">
        <div class="customwidth">
          <h1 class="text-3xl sm:text-5xl px-2 font-bold text-cardiff-white mb-8 text-left">Cardiff University Open Day</h1>
        </div>
      </div>
      ${l(e.topics)}
    </div>
  `,document.getElementById("backButton")?.addEventListener("click",()=>{window.location.reload()})}p().then(v);
