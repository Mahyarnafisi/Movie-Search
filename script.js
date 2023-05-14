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
  let apiUrl = `https://www.omdbapi.com/?i=${movieName}&apikey=${apiKey}`;

  if (movieName === "") {
    containerNotFound.classList.add("display");
    containerResult.classList.add("display");
  } else {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          console.log(data);
          containerNotFound.classList.add("display");
          containerResult.classList.add("display");
        } else {
          console.log(data.Response);
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
