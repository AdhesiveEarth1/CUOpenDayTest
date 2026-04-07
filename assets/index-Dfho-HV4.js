(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const d="/CUOpenDayTest/vite.svg",u="/CUOpenDayTest/tailwindcss-mark.svg",p="/CUOpenDayTest/typescript.svg",r="/CUOpenDayTest/cu-logo.svg";async function f(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function m(e,t){return e.topics.filter(n=>n.name&&n.name.charAt(0).toUpperCase()===t.toUpperCase())}function l(){return`
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${d}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${u}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="${p}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>
  `}function g(){return`
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
  `}function v(){return`
    <div class="filter-container mb-6">
      <button id="backButton">Back</button>
    </div>
  `}function c(e){return`
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  px-2">
      ${e.map(t=>`
        <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
          <img src="${t.cover_image||r}" alt="${t.name}" class="h-32 w-full object-cover rounded mb-4" />
          <h2 class="text-xl font-bold text-cardiff-white mb-2">${t.name}</h2>
          <p class="text-cardiff-white mb-2">${t.description||""}</p>
          <button id="subjectButton" onclick= "sessionStorage.setItem('Subject', JSON.stringify([${t.id}]))"> Show Event Info </button>
        </div>
      `).join("")}
    </div>
  `}function b(e){const t=document.querySelector("#app");if(!e||!e.topics||e.topics.length===0){alert("No open day data matching your criteria found");return}t.innerHTML=`
    ${l()}
    

<button command="show-modal" commandfor="dialog" class="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20">Open dialog</button>
<el-dialog>
  <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 m-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent p-0 backdrop:bg-transparent">
    <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"></el-dialog-backdrop>

    <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline focus:outline-0 sm:items-center sm:p-0">
      <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline outline-1 -outline-offset-1 outline-white/10 transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
        <div class="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-red-400">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 id="dialog-title" class="text-base font-semibold text-white">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-400">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" command="close" commandfor="dialog" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">Deactivate</button>
          <button type="button" command="close" commandfor="dialog" class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>














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
       ${g()}
       </div>
      ${c(e.topics)}
    </div>
   
  `,document.getElementById("filterButton")?.addEventListener("click",()=>{const a=document.getElementById("mySelect").value,n=m(e,a);y({topics:n})}),document.getElementById("subjectButton")?.addEventListener("click",()=>{alert(sessionStorage.getItem("Subject"))})}function y(e){const t=document.querySelector("#app");if(!e||!e.topics||e.topics.length===0){alert("No open day data matching your criteria found");return}t.innerHTML=`
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
       ${v()}
       </div>
      ${c(e.topics)}
    </div>
  `,document.getElementById("backButton")?.addEventListener("click",()=>{window.location.reload()})}f().then(b);
