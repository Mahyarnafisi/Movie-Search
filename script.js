"use strict";
// --------------------------------------//
let movieNameRef = document.getElementById("movie-name");
let btnSearch = document.getElementById("btn-search");
const btnRefresh = document.querySelector(".btn-refresh");
let containerResult = document.querySelector(".result");
const containerNotFound = document.querySelector(".not-found");

const apiKey = "4fccaa42";

// -----------------------------------------//

// reloading btn in not-found section

btnRefresh.addEventListener("click", () => {
  window.location.reload();
});

// function for fetching from API---------

const getMovie = () => {
  const movieName = movieNameRef.value;
  const apiUrl = `https://www.omdbapi.com/?i=${movieName}&apikey=${apiKey}`;
  console.log(apiUrl);

  if (movieName.length <= 0) {
    containerNotFound.classList.add("display");
    containerResult.classList.add("display");
  } else {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.response === "true") {
          console.log(data);
        } else {
          console.log("no data");
        }
      });
  }
};

btnSearch.addEventListener("click", () => {
  getMovie();
});
