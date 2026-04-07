(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const d="/CUOpenDayTest/vite.svg",f="/CUOpenDayTest/tailwindcss-mark.svg",p="/CUOpenDayTest/typescript.svg",r="/CUOpenDayTest/cu-logo.svg";async function m(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function u(i,t){return i.topics.filter(o=>o.name&&o.name.charAt(0).toUpperCase()===t.toUpperCase())}function l(){return`
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
          <img src="${p}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>
  `}function v(){return`
    <div class="filter-container mb-6 py-6">
    <div class = "text-cardiff-dark">
    <p>Select Starting Letter to Filter By</p>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
      <select id="mySelect">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="H">H</option>
        <option value="I">I</option>
        <option value="J">J</option>
        <option value="K">K</option>
        <option value="L">L</option>
        <option value="M">M</option>
        <option value="N">N</option>
        <option value="O">O</option>
        <option value="P">P</option>
        <option value="Q">Q</option>
        <option value="R">R</option>
        <option value="S">S</option>
        <option value="T">T</option>
        <option value="U">U</option>
        <option value="V">V</option>
        <option value="W">W</option>
        <option value="X">X</option>
        <option value="Y">Y</option>
        <option value="Z">Z</option>
      </select>
      <button id="filterButton">Filter</button>
      </div>
    </div>
  `}function g(){return`
    <div class="filter-container mb-6">
      <button id="backButton">Back</button>
    </div>
  `}function c(i){return`
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
      ${i.map((t,n)=>{const o=`dialog-${n}`;return`
        <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
          <img src="${t.cover_image||r}" alt="${t.name}" class="h-32 w-full object-cover rounded mb-4" />
          <h2 class="text-xl font-bold text-cardiff-white mb-2">${t.name}</h2>
          <p class="text-cardiff-white mb-2">${t.description||""}</p>
          
          <button command="show-modal" commandfor="${o}" class="rounded-md bg-cardiff-dark px-2.5 py-1.5 text-sm font-semibold text-cardiff-white ring-1 ring-inset ring-white/5">
            Show Information
          </button>
          
          <el-dialog>
            <dialog id="${o}" aria-labelledby="dialog-title-${n}" class="fixed inset-0 m-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent p-0 backdrop:bg-transparent">
              <el-dialog-backdrop class="fixed inset-0 bg-cardiff-grey/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200"></el-dialog-backdrop>
              
              <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-cardiff-dark text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-cardiff-dark px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 id="dialog-title-${n}" class="text-base font-semibold text-cardiff-white">Information</h3>
                        <div class="mt-2">
                          <p class="text-sm text-cardiff-grey">
                            ${t.programs&&t.programs.length?`
                              <div class="mt-2">
                                <h3 class="font-semibold text-cardiff-dark mb-1">Events:</h3>
                                <ul class="list-disc list-inside text-sm">
                                  ${t.programs.map(e=>e&&e.title?`<li><span class="font-semibold">${e.title}</span>${e.start_time?` <span class='text-xs text-cardiff-red'>(${new Date(e.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}${e.end_time?" - "+new Date(e.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})</span>`:""}${e.room?`, <span class='text-xs'>${e.room}</span>`:""}${e.location.title?`, <span class='text-xs'>${e.location.title}</span>`:""}${e.location.address?`, <span class='text-xs'>${e.location.address}</span>`:""}${e.location.postcode?`, <span class='text-xs'>${e.location.postcode}</span>`:""}</li>`:"").join("")}
                                </ul>
                              </div>
                            `:""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" command="close" commandfor="${o}" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-cardiff-white hover:bg-red-400 sm:ml-3 sm:w-auto">Close</button>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </div>
        `}).join("")}
    </div>
  `}function x(i){const t=document.querySelector("#app");if(!i||!i.topics||i.topics.length===0){alert("No open day data matching your criteria found");return}t.innerHTML=`
    ${l()}
    

    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${r}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>  
      </div>
      <a>
        <img src="https://cardiff.imgix.net/__data/assets/image/0007/1380454/main-building-open-day.jpg?w=800%5Cu0026fit=crop%5Cu0026q=60%5Cu0026auto=format" alt="Cardiff University Main Building" class="h-32 w-full object-cover rounded mb-4">
      </a>
      <div class="bg-cardiff-red px-0 py-6">
        <div class="customwidth">
          <h1 class="text-3xl sm:text-5xl px-2 font-bold text-cardiff-white  text-left">Cardiff University Open Day</h1>
        </div>
      </div>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
       ${v()}
       </div>
      ${c(i.topics)}
    </div>
   
  `,document.getElementById("filterButton")?.addEventListener("click",()=>{const n=document.getElementById("mySelect").value,o=u(i,n);b({topics:o})})}function b(i){const t=document.querySelector("#app");if(!i||!i.topics||i.topics.length===0){alert("No open day data matching your criteria found");return}t.innerHTML=`
    ${l()}
    
    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${r}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>  
      </div>
      <a>
        <img src="https://cardiff.imgix.net/__data/assets/image/0007/1380454/main-building-open-day.jpg?w=800%5Cu0026fit=crop%5Cu0026q=60%5Cu0026auto=format" alt="Cardiff University Main Building" class="h-32 w-full object-cover rounded mb-4">
      </a>
      <div class="bg-cardiff-red px-0 py-6">
        <div class="customwidth">
          <h1 class="text-3xl sm:text-5xl px-2 font-bold text-cardiff-white  text-left">Cardiff University Open Day</h1>
        </div>
      </div>
        <div class="flex flex-col sm:flex-row items-center justify-left gap-4 py-6 mb-6">
       ${g()}
       </div>
      ${c(i.topics)}
    </div>
  `,document.getElementById("backButton")?.addEventListener("click",()=>{window.location.reload()})}m().then(x);
