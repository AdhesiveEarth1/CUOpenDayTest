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
    <div class="filter-container mb-6">
      <select id="mySelect">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <button id="filterButton">Filter</button>
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
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-2">
      ${topics.map((topic: any) => `
        <div class="bg-cardiff-red rounded-lg shadow p-6 flex flex-col">
          <img src="${topic.cover_image || cuLogo}" alt="${topic.name}" class="h-32 w-full object-cover rounded mb-4" />
          <h2 class="text-xl font-bold text-cardiff-white mb-2">${topic.name}</h2>
          <p class="text-cardiff-white mb-2">${topic.description || ''}</p>
          <button type="button" onclick="localStorage.setItem('Subject', ${JSON.stringify(topic)})"> Show Event Info </button>
        </div>
      `).join('')}
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
    ${renderFilterUI()}
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
          <h1 class="text-3xl sm:text-5xl px-2 font-bold text-cardiff-white mb-8 text-left">Cardiff University Open Day</h1>
        </div>
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
    ${renderBackUI()}
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
          <h1 class="text-3xl sm:text-5xl px-2 font-bold text-cardiff-white mb-8 text-left">Cardiff University Open Day</h1>
        </div>
      </div>
      ${renderTopics(data.topics)}
    </div>
  `;

    document.getElementById("backButton")?.addEventListener("click", () => {
    window.location.reload()
  });

}



loadOpenDay().then(renderOpenDay);