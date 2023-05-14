"use strict";
// --------------------------------------//
let movieNameRef = document.getElementById("movie-name");
let btnSearch = document.getElementById("btn-search");
const btnRefresh = document.querySelector(".btn-refresh");
let containerResult = document.querySelector(".result");
const containerNotFound = document.querySelector(".not-found");
const apiKey = "4fccaa42";

// -----------------------------------------//

// reloading btn in not-found section----//

btnRefresh.addEventListener("click", () => {
  window.location.reload();
});

// function for fetching from API---------//

const getMovie = () => {
  let movieName = movieNameRef.value;
  let apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=4fccaa42`;

  if (movieName === "") {
    containerNotFound.classList.add("display");
    containerResult.classList.add("display");
  } else {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          containerNotFound.classList.add("display");
          containerResult.classList.add("display");
        } else {
          console.log(data);
          containerResult.classList.add("display");
          containerResult.innerHTML = `<div class="info">
          <div class="info__img">
           <img src=${data.Poster} class="info__poster">
            </div>
           <div class="info__detail">
             <h3 class="info__title">${data.Title} <span>(${data.Year})</span> </h3>
             <p class="info__language"><span class="info__key">Language:</span> ${data.Language}</p>
             <p class="info__release"><span class="info__key">Release:</span> ${data.Released}</p>
              <p class="info__duration"><span class="info__key">Duration:</span> ${data.Runtime}</p>
              <p class="info__rate"><span class="info__key">imdb rate:</span> <i class="bi   bi-star-fill"></i>${data.imdbRating}</p>
              <p class="info__plot"> ${data.Plot}</p>
              <p class="info__awards"><span class="info__key">Awarded:</span> ${data.Awards}</p>
              <p class="info__actors"><span class="info__key">Actors:</span> ${data.Actors}</p>
              
           </div>
          </div>
            `;
        }
      });
  }
};

// Button search handler---Click an dEnter---------------//

btnSearch.addEventListener("click", getMovie);

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getMovie();
  }
  return;
});
