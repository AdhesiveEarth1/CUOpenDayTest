// Utility to fetch and display Open Day data from public/OpenDay14.json
import './style.css'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwindcss-mark.svg'
import typeScriptLogo from '/typescript.svg'
import cuLogo from '/cu-logo.svg'



async function loadOpenDay() {
  // Use the correct base path for GitHub Pages
  const base = import.meta.env.BASE_URL || '/';
  const res = await fetch(`${base}api/OpenDay.json`)
  const data = await res.json()
  return data
}


function filterResults(data: any, letter: string){
 
  const filteredData = data.topics.filter((topic: any) => 
    topic.name && topic.name.charAt(0).toUpperCase() === letter.toUpperCase()
  );
  return filteredData;
}


// Render the top part of the page (static content)
function renderHeader() {
  return `
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${viteLogo}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${tailwindLogo}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="${typeScriptLogo}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>
  `;
}

// Render the filtering UI
function renderFilterUI() {
  return `
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
  `;
}

function renderBackUI() {
  return `
    <div class="filter-container mb-6">
      <button id="backButton">Back</button>
    </div>
  `;
}


// Render the grid of topics
function renderTopics(topics: any) {
  return `
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
      ${topics.map((topic: any, index: number) => {
        const dialogId = `dialog-${index}`;
        return `
        <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
          <img src="${topic.cover_image || cuLogo}" alt="${topic.name}" class="h-32 w-full object-cover rounded mb-4" />
          <h2 class="text-xl font-bold text-cardiff-white mb-2">${topic.name}</h2>
          <p class="text-cardiff-white mb-2">${topic.description || ''}</p>
          
          <button command="show-modal" commandfor="${dialogId}" class="rounded-md bg-cardiff-dark px-2.5 py-1.5 text-sm font-semibold text-cardiff-white ring-1 ring-inset ring-white/5">
            Show Information
          </button>
          
          <el-dialog>
            <dialog id="${dialogId}" aria-labelledby="dialog-title-${index}" class="fixed inset-0 m-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent p-0 backdrop:bg-transparent">
              <el-dialog-backdrop class="fixed inset-0 bg-cardiff-grey/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200"></el-dialog-backdrop>
              
              <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-cardiff-dark text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-cardiff-dark px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 id="dialog-title-${index}" class="text-base font-semibold text-cardiff-white">Information</h3>
                        <div class="mt-2">
                          <p class="text-sm text-cardiff-grey">
                            ${topic.programs && topic.programs.length ? `
                              <div class="mt-2">
                                <h3 class="font-semibold text-cardiff-dark mb-1">Events:</h3>
                                <ul class="list-disc list-inside text-sm">
                                  ${topic.programs.map((prog: any) => prog && prog.title ? `<li><span class="font-semibold">${prog.title}</span>${prog.start_time ? ` <span class='text-xs text-cardiff-red'>(${new Date(prog.start_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}${prog.end_time ? ' - ' + new Date(prog.end_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''})</span>` : ''}${prog.room ? `, <span class='text-xs'>${prog.room}</span>` : ''}${prog.location.title ? `, <span class='text-xs'>${prog.location.title}</span>` : ''}${prog.location.address ? `, <span class='text-xs'>${prog.location.address}</span>` : ''}${prog.location.postcode ? `, <span class='text-xs'>${prog.location.postcode}</span>` : ''}</li>` : '').join('')}
                                </ul>
                              </div>
                            ` : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" command="close" commandfor="${dialogId}" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-cardiff-white hover:bg-red-400 sm:ml-3 sm:w-auto">Close</button>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </div>
        `;
      }).join('')}
    </div>
  `;
}




// Main render function to combine everything
function renderOpenDay(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  if (!data || !data.topics || data.topics.length === 0) {
    alert("No open day data matching your criteria found")
    //app.innerHTML = '<p class="text-red-600">No Open Day data found.</p>';
    return;
  }

  // Render the full content (header + filter UI + topics)
  app.innerHTML = `
    ${renderHeader()}
    

    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto" />
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
       ${renderFilterUI()}
       </div>
      ${renderTopics(data.topics)}
    </div>
   
  `;

  // Add event listener to the filter button
  document.getElementById("filterButton")?.addEventListener("click", () => {
    const letter = (document.getElementById("mySelect") as HTMLSelectElement).value;
    

    const filteredData = filterResults(data, letter);
   
    
    renderFilterOpenDay({ topics: filteredData }); // Re-render with filtered data
  });


}

function renderFilterOpenDay(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  if (!data || !data.topics || data.topics.length === 0) {
    alert("No open day data matching your criteria found")
    //app.innerHTML = '<p class="text-red-600">No Open Day data found.</p>';
    return;
  }

  // Render the full content (header + filter UI + topics)
  app.innerHTML = `
    ${renderHeader()}
    
    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto" />
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
       ${renderBackUI()}
       </div>
      ${renderTopics(data.topics)}
    </div>
  `;

    document.getElementById("backButton")?.addEventListener("click", () => {
    window.location.reload()
  });

}



loadOpenDay().then(renderOpenDay);