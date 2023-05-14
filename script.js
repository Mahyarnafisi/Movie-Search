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
  const movieName = movieNameRef.value;
  const apiUrl = `https://www.omdbapi.com/?i=${movieName}&apikey=${apiKey}`;
  console.log(apiUrl);

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
          containerResult.innerHTML = `<div class="info">
          <img src=${data.Poster} class="poster">
          </div>
          <h2>${data.Title}</h2>
          `;
        }
      });
  }
};

// Button search handler---Click an dEnter---------------//

btnSearch.addEventListener("click", () => {
  getMovie();
});

const keyRefresh = window.addEventListener("keypress", (e) => {
  if (e === "Enter") {
    getMovie();
  } else {
    return;
  }
});
