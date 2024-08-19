/* Реалізуйте веб-сторінку для пошуку фільмів.
При відкритті сторінки користувачеві доступна лише форма
для введення назви фільму (або частини назви) та вибору типу
(movie, series, episode).
Після того як користувач ввів дані та натиснув на кнопку
Search, необхідно надіслати відповідний запит до API ресурсу
OMDB (http://www.omdbapi.com/) за допомогою AJAX.
Якщо у разі відповіді на запит ви отримали список фільмів,
його необхідно відобразити під формою пошуку. Якщо по
заданим критеріям фільмів не знайдено, відобразіть повідомлення
Movie not found!. */

class MovieService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "http://www.omdbapi.com/";
  }

  async search(title, type, page = 1) {
    const response = await fetch(
      `${this.baseUrl}?s=${title}&type=${type}&page=${page}&apikey=${this.apiKey}`
    );
    const data = await response.json();
    return data;
  }

  async getMovie(movieId) {
    const response = await fetch(
      `${this.baseUrl}?i=${movieId}&apikey=${this.apiKey}`
    );
    const data = await response.json();
    return data;
  }
}

let currentPage = 1;
let moviesPerPage = 6;
let allMovies = [];
let currentSort = null;
const movieService = new MovieService("b288c321"); // Congratulations, you've found an Api Key! You can use it for free :)

document
  .getElementById("searchForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const title = document.getElementById("movieTitle").value;
    const type = document.getElementById("type").value;

    document.getElementById("loading").style.display = "flex";
    const data = await movieService.search(title, type);
    document.getElementById("loading").style.display = "none";

    if (data.Response === "True") {
      allMovies = data.Search;
      currentPage = 1;
      displayMovies();
      setupPagination();
      document.getElementById("moreButton").style.display = "block";
    } else {
      document.getElementById("results").innerHTML = "<p>Movie not found!</p>";
      document.getElementById("pagination").innerHTML = "";
      document.getElementById("moreButton").style.display = "none";
    }
  });

document.getElementById("sortByName").addEventListener("click", () => {
  currentSort = "name";
  sortMovies();
  displayMovies();
});

document.getElementById("sortByDate").addEventListener("click", () => {
  currentSort = "date";
  sortMovies();
  displayMovies();
});

document.getElementById("moreButton").addEventListener("click", async () => {
  currentPage++;
  document.getElementById("moreButton").disabled = true;
  document.getElementById("loading").style.display = "flex";
  const data = await movieService.search(
    document.getElementById("movieTitle").value,
    document.getElementById("type").value,
    currentPage
  );
  document.getElementById("loading").style.display = "none";
  document.getElementById("moreButton").disabled = false;

  if (data.Response === "True") {
    allMovies = allMovies.concat(data.Search);
    displayMovies();
    setupPagination();
  }
});

function sortMovies() {
  if (currentSort === "name") {
    allMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (currentSort === "date") {
    allMovies.sort((a, b) => a.Year.localeCompare(b.Year));
  }
}

function displayMovies() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const start = (currentPage - 1) * moviesPerPage;
  const end = start + moviesPerPage;
  const moviesToShow = allMovies.slice(start, end);

  moviesToShow.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
          <h2>${movie.Title}</h2>
          <p>${movie.Year}</p>
          <img src="${movie.Poster}" alt="${movie.Title}">
          <button onclick="showDetails('${movie.imdbID}')">Details</button>
      `;
    resultsDiv.appendChild(movieDiv);
  });
}

function setupPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";

  const totalPages = Math.ceil(allMovies.length / moviesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayMovies();
    });
    paginationDiv.appendChild(pageButton);
  }
}

async function showDetails(imdbID) {
  const modal = document.getElementById("modal");
  const modalLoading = document.getElementById("modalLoading");
  const modalDetails = document.getElementById("modalDetails");
  const span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  modalLoading.style.display = "flex";
  modalDetails.innerHTML = "";

  const data = await movieService.getMovie(imdbID);
  modalLoading.style.display = "none";

  modalDetails.innerHTML = `
      <img src="${data.Poster}" alt="${data.Title}">
      <div>
          <h2>${data.Title}</h2>
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Rated:</strong> ${data.Rated}</p>
          <p><strong>Released:</strong> ${data.Released}</p>
          <p><strong>Runtime:</strong> ${data.Runtime}</p>
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>Director:</strong> ${data.Director}</p>
          <p><strong>Writer:</strong> ${data.Writer}</p>
          <p><strong>Actors:</strong> ${data.Actors}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>Language:</strong> ${data.Language}</p>
          <p><strong>Country:</strong> ${data.Country}</p>
          <p><strong>Awards:</strong> ${data.Awards}</p>
      </div>
  `;

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
