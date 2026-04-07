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

//Below is the function that helps filter the results, it takes in the data of the subjects and a letter and returns a list of subjects whose first letter matches the supplied letter.
function filterResults(data: any, letter: string){
 
  const filteredData = data.topics.filter((topic: any) => 
    topic.name && topic.name.charAt(0).toUpperCase() === letter.toUpperCase()
  );
  return filteredData;
}


//Below we render the yellow banner at the top of the page
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

// Below returns the text, button and filter options for the filter
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
//Below is the function to display the back button
function renderBackUI() {
  return `
    <div class="filter-container mb-6 py-6">
      <button id="backButton">Back</button>
    </div>
  `;
}


// Below is the code that renders the topic cards at the bottom of the page. I have added in an index variable to the function
function renderTopics(topics: any) {
  return ` 
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
      ${topics.map((topic: any, index: number) => {
        //We set the dialogue ID variable to ensure we have something which we can get the subject event information from and reference in the code
        const dialogId = `dialog-${index}`;
        return `

        <!-- Below is the code that brings up the main picture, title, description and button for each subject card-->

        <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
          <img src="${topic.cover_image || cuLogo}" alt="${topic.name}" class="h-32 w-full object-cover rounded mb-4" />
          <h2 class="text-xl font-bold text-cardiff-white mb-2">${topic.name}</h2>
          <p class="text-cardiff-white mb-2">${topic.description || ''}</p>

          <!-- Below, we ensure that we have the dialogId and display the button  -->
          <button command="show-modal" commandfor="${dialogId}" class="rounded-md bg-cardiff-dark px-2.5 py-1.5 text-sm font-semibold text-cardiff-white ring-1 ring-inset ring-cardiff-white/5">
            Show Information
          </button>
          
        <!-- Below is the dialogue box for the info pop up, I installed the @tailwindplus/elements package to use this -->
        <!-- We make a modal (pop up box) for each subject, then we use the dialogId variable stored within each card to show the correct corresponding modal-->

        <!-- Below is where we make use of that dialogId again (as well as the index variable), this time to prepare the info pop up box. There is also a lot of CSS here for the box pop up, modified from the example code found here: https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/modal-dialogs -->
        <!-- Aside from the modification to make it a pop up box (and the occasional inclusion of an index and/or dialogId variable) the majority of the code is the same as what was given to me -->
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
                                <h3 class="font-semibold text-cardiff-light mb-1">Events:</h3>
                                <ul class="list-disc list-inside text-sm">
                                <!-- In the line below, we have added the address of the buildings and a horizontal rule between each event -->
                                  ${topic.programs.map((prog: any) => prog && prog.title ? `<li><span class="font-semibold">${prog.title}</span>${prog.start_time ? ` <span class='text-xs text-cardiff-red'>(${new Date(prog.start_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}${prog.end_time ? ' - ' + new Date(prog.end_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''})</span>` : ''}${prog.room ? `, <span class='text-xs'>${prog.room}</span>` : ''}${prog.location.title ? `, <span class='text-xs'>${prog.location.title}</span>` : ''}${prog.location.address ? `, <span class='text-xs'>${prog.location.address}</span>` : ''}${prog.location.postcode ? `, <span class='text-xs'>${prog.location.postcode}</span><hr class = "bg-cardiff-light"> ` : ''}</li>` : '').join('')}
                                </ul>
                              </div>
                            ` : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" command="close" commandfor="${dialogId}" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-cardiff-white hover:bg-cardiff-red sm:ml-3 sm:w-auto">Close</button>
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




// Main render function to combine everything on an unfiltered page. Although it is similar to the filtered page, there are subtle differences
//To start, it uses a different way of displaying no open day data. On the main unfiltered page loading into the website, you want to be stopped
//and told there is no open day data at all. Later on, it will show you an alert about the filter not finding anything.
//Additionally, on this page we show the filter button and dropdown box whereas on the other page we show only a back button.
function renderOpenDay(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  if (!data || !data.topics || data.topics.length === 0) {
    app.innerHTML = `<p class="text-red-600">No Open Day data found.</p>`
     return;
  

  }
  app.innerHTML = `
<!-- Below is an example of one of the function uses, it makes the webpage a little bit more modular -->
    ${renderHeader()}
    

    <div class="min-h-screen bg-cardiff-white font-sans py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto" />
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
        
       ${renderFilterUI()}
       </div>
      ${renderTopics(data.topics)}
    </div>
   
  `;

  // Below is an event listener for the filter button. Rather than use an onclick inside of the button, I have given the button a unique name which the function below looks out for when pressed
  
  document.getElementById("filterButton")?.addEventListener("click", () => {
    //Below grabs the letter from the dropdown box
    const letter = (document.getElementById("mySelect") as HTMLSelectElement).value;
    
    //Below gets a list of filtered data matching the letter selected
    const filteredData = filterResults(data, letter);
   
    //Below renders the open day with the filtered data, using the renderFilterOpenDay function rather than the regular renderOpenDay one
    renderFilterOpenDay({ topics: filteredData });
  });


}

//The below function is used to render the open day with the filter applied. There are subtle differences compared to the regular renderOpenDat function
//Firstly, the no open day data page is replaced with an alert than notifies you there's no criteria matching your filter
//Additionally, the filter ui is replaced with a back button.
function renderFilterOpenDay(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  if (!data || !data.topics || data.topics.length === 0) {
    alert("No Subjects Matching Filter Criteria Found")
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
       ${renderBackUI()}
       </div>
      ${renderTopics(data.topics)}
    </div>
   
  `;

    //Below is the event listener that watches for the back button press
    //You may notice all it does is reload the page, that is intentional
    //When we activate the filter, it doesn't take us to a sub directory html page or anything like that
    //this means when we reload the page, the filtered content disappears.
    //So this back button takes us "back" to the unfiltered page by simply reloading the page
    //And since the event info is shown in pop up cards and not html sub pages or anything like that the illusion stays.
    document.getElementById("backButton")?.addEventListener("click", () => {
    window.location.reload()
  });

}



loadOpenDay().then(renderOpenDay);