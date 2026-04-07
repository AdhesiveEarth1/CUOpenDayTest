(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const c="/CUOpenDayTest/vite.svg",f="/CUOpenDayTest/tailwindcss-mark.svg",p="/CUOpenDayTest/typescript.svg",l="/CUOpenDayTest/cu-logo.svg";async function u(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function m(i,t){return i.topics.filter(o=>o.name&&o.name.charAt(0).toUpperCase()===t.toUpperCase())}function r(){return`
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${c}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${f}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
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
  `}function h(){return`
    <div class="filter-container mb-6 py-6">
      <button id="backButton">Back</button>
    </div>
  `}function d(i){return` 
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
      ${i.map((t,n)=>{const o=`dialog-${n}`;return`

        <!-- Below is the code that brings up the main picture, title, description and button for each subject card-->

        <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
          <img src="${t.cover_image||l}" alt="${t.name}" class="h-32 w-full object-cover rounded mb-4" />
          <h2 class="text-xl font-bold text-cardiff-white mb-2">${t.name}</h2>
          <p class="text-cardiff-white mb-2">${t.description||""}</p>

          <!-- Below, we ensure that we have the dialogId and display the button  -->
          <button command="show-modal" commandfor="${o}" class="rounded-md bg-cardiff-dark px-2.5 py-1.5 text-sm font-semibold text-cardiff-white ring-1 ring-inset ring-cardiff-white/5">
            Show Information
          </button>
          
        <!-- Below is the dialogue box for the info pop up, I installed the @tailwindplus/elements package to use this -->
        <!-- We make a modal (pop up box) for each subject, then we use the dialogId variable stored within each card to show the correct corresponding modal-->

        <!-- Below is where we make use of that dialogId again (as well as the index variable), this time to prepare the info pop up box. There is also a lot of CSS here for the box pop up, modified from the example code found here: https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/modal-dialogs -->
        <!-- Aside from the modification to make it a pop up box (and the occasional inclusion of an index and/or dialogId variable) the majority of the code is the same as what was given to me -->
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
                                <h3 class="font-semibold text-cardiff-light mb-1">Events:</h3>
                                <ul class="list-disc list-inside text-sm">
                                <!-- In the line below, we have added the address of the buildings and a horizontal rule between each event -->
                                  ${t.programs.map(e=>e&&e.title?`<li><span class="font-semibold">${e.title}</span>${e.start_time?` <span class='text-xs text-cardiff-red'>(${new Date(e.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}${e.end_time?" - "+new Date(e.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})</span>`:""}${e.room?`, <span class='text-xs'>${e.room}</span>`:""}${e.location.title?`, <span class='text-xs'>${e.location.title}</span>`:""}${e.location.address?`, <span class='text-xs'>${e.location.address}</span>`:""}${e.location.postcode?`, <span class='text-xs'>${e.location.postcode}</span><hr class = "bg-cardiff-light"> `:""}</li>`:"").join("")}
                                </ul>
                              </div>
                            `:""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" command="close" commandfor="${o}" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-cardiff-white hover:bg-cardiff-red sm:ml-3 sm:w-auto">Close</button>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </div>
        `}).join("")}
    </div>
  `}function v(i){const t=document.querySelector("#app");if(!i||!i.topics||i.topics.length===0){t.innerHTML='<p class="text-red-600">No Open Day data found.</p>';return}t.innerHTML=`
<!-- Below is an example of one of the function uses, it makes the webpage a little bit more modular -->
    ${r()}
    

    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${l}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>  
      </div>
      <a>
      <!-- I took the liberty of taking one of the image links of the main building in one of the .json files given to me and linking it here, making it look more like a proper cardiff university webpage in my opinion -->
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
      ${d(i.topics)}
    </div>
   
  `,document.getElementById("filterButton")?.addEventListener("click",()=>{const n=document.getElementById("mySelect").value,o=m(i,n);b({topics:o})})}function b(i){const t=document.querySelector("#app");if(!i||!i.topics||i.topics.length===0){alert("No Subjects Matching Filter Criteria Found");return}t.innerHTML=`
    ${r()}
    

    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${l}" alt="Cardiff University Logo" class="h-16 w-auto" />
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
       ${h()}
       </div>
      ${d(i.topics)}
    </div>
   
  `,document.getElementById("backButton")?.addEventListener("click",()=>{window.location.reload()})}u().then(v);
