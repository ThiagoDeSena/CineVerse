const form = document.querySelector("form");
const titleInput = document.getElementById("movie-title");
const yearInput = document.getElementById("movie-year");
const genreInput = document.getElementById("movie-genre");
const imageInput = document.getElementById("movie-image");
const movieList = document.getElementById("movie-list");

const fallbackImage = "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=No+Cover";

function loadMovies() {
  return JSON.parse(localStorage.getItem("movies")) || [];
}

function saveMovies(movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

// function renderMovies(genreFilter = "All Genres") {
//     const movies = loadMovies();
//     movieList.innerHTML = "";

//     const filteredMovies = genreFilter === "All Genres"
//         ? movies
//         : movies.filter(movie => movie.genre === genreFilter);

//     if (filteredMovies.length === 0) {
//         movieList.innerHTML = `<p class="text-center text-[var(--text-secondary)] col-span-full">Nenhum filme encontrado.</p>`;
//         return;
//     }

//     filteredMovies.forEach((movie, index) => {
//         const card = document.createElement("div");

//         card.className =
//             "group relative overflow-hidden rounded-lg bg-[var(--surface-color)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl";

//         card.innerHTML = `
//       <div class="aspect-w-16 aspect-h-9">
//         <img 
//           alt="${movie.title} poster" 
//           src="${movie.image || fallbackImage}" 
//           class="w-full h-full object-cover" 
//         />
//       </div>
//       <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//       <div class="absolute bottom-0 p-4 text-white">
//         <h3 class="text-lg font-bold">${movie.title}</h3>
//         <p class="text-sm text-[var(--text-secondary)]">${movie.year} | ${movie.genre}</p>
//       </div>
//       <button data-index="${index}" class="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-1.5 text-[var(--text-secondary)] opacity-0 transition-opacity group-hover:opacity-100 hover:text-white">
//         <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
//           <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM200,208H56V64H200Z"></path>
//         </svg>
//       </button>
//     `;

//         // Remover filme
//         card.querySelector("button").addEventListener("click", () => {
//             const updated = loadMovies().filter((_, i) => i !== index);
//             saveMovies(updated);
//             renderMovies(genreFilter); // renderiza com o filtro atual
//         });

//         movieList.appendChild(card);
//     });
// }


function renderMovies(genreFilter = "Todos os Gêneros", searchQuery = "") {
  const movies = loadMovies();
  movieList.innerHTML = "";

  let filteredMovies = genreFilter === "Todos os Gêneros"
    ? movies
    : movies.filter(movie => movie.genre === genreFilter);

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();
    filteredMovies = filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
  }

  if (filteredMovies.length === 0) {
    movieList.innerHTML = `<p class="text-center text-[var(--text-secondary)] col-span-full">Nenhum filme encontrado.</p>`;
    return;
  }

  filteredMovies.forEach((movie, index) => {
    const card = document.createElement("div");

    card.className =
      "group relative overflow-hidden rounded-lg bg-[var(--surface-color)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl";

    card.innerHTML = `
      <div class="aspect-w-16 aspect-h-9">
        <img 
          alt="${movie.title} poster" 
          src="${movie.image || fallbackImage}" 
          class="w-full h-full object-cover" 
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div class="absolute bottom-0 p-4 text-white">
        <h3 class="text-lg font-bold">${movie.title}</h3>
        <p class="text-sm text-[var(--text-secondary)]">${movie.year} | ${movie.genre}</p>
      </div>
      <button data-index="${index}" class="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-1.5 text-[var(--text-secondary)] opacity-0 transition-opacity group-hover:opacity-100 hover:text-red-500">
        <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM200,208H56V64H200Z"></path>
        </svg>
      </button>
    `;

    // Remover filme
    card.querySelector("button").addEventListener("click", () => {
      const updated = loadMovies().filter((_, i) => i !== index);
      saveMovies(updated);
      renderMovies(genreFilterSelect.value, searchInput.value); // mantém filtro e busca
    });

    movieList.appendChild(card);
  });
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const year = parseInt(yearInput.value.trim());
  const genre = genreInput.value;
  const image = imageInput.value.trim();

  if (!title || isNaN(year) || year < 1888 || genre === "Select a genre") {
    alert("Preencha todos os campos obrigatórios corretamente.");
    return;
  }

  // Verifica se foi fornecida uma imagem válida (mínimo: começa com http ou https)
  const isValidImageURL = image.startsWith("http://") || image.startsWith("https://");
  const imageToUse = isValidImageURL ? image : "img/imagem.png";

  const newMovie = { title, year, genre, image: imageToUse };

  // const newMovie = { title, year, genre, image: image || fallbackImage };
  const movies = loadMovies();
  movies.push(newMovie);
  saveMovies(movies);
  renderMovies();

  // limpar campos
  titleInput.value = "";
  yearInput.value = "";
  genreInput.selectedIndex = 0;
  imageInput.value = "";
});

renderMovies();

const genreFilterSelect = document.getElementById("genre-filter");

genreFilterSelect.addEventListener("change", () => {
  const selectedGenre = genreFilterSelect.value;
  const searchText = searchInput.value.trim();
  renderMovies(selectedGenre, searchText);
});



const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener("input", () => {
  const selectedGenre = genreFilterSelect.value;
  const searchTerm = searchInput.value;
  renderMovies(selectedGenre, searchTerm);
});

