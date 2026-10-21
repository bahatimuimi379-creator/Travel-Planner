"use strict";
console.log("app.js is running");

// const views = document.querySelectorAll(".view");
const API ="http://localhost:3001/countries"
let allCountries = [];


const divCountries = document.querySelector("#countries")

fetch(API)
.then(response =>response.json())
.then(data =>displayCountries(
  data
))

function displayCountries (data) {
  data.forEach(element => {
    divCountries.innerHTML += `
      <p> ${element.status}</p>
    `
    
  });
}
 