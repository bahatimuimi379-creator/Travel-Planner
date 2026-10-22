"use strict";
console.log("app.js is running");

const views = document.querySelectorAll(".view");
const API ="http://localhost:3000/countries"
let allCountries = [];


const divCountries = document.querySelector("#countries")

fetch(API)
.then(response =>response.json())
.then(data =>{
  allCountries = data;
  displayCountries(data);});

function displayCountries (data) {
  divCountries.innerHTML= "";


  data.forEach((element , index)=> {
    divCountries.innerHTML += `
    <div class="card" onclick="openCountryDetails(${element.id})" style="cursor: pointer;">
      <p> ${element.status}</p>
      </div>
    `;
    
  });
}

const searchInput = document.querySelector("input");
searchInput.addEventListener("input", function (event){
  const searchTerm = event.target.value.toLowerCase();

  const filtered = allCountries.filter(element => {
    return element.status.split("<br>")[0].toLowerCase().includes(searchTerm);

  });
  displayCountries(filtered);
});
 
const regionSelect = document.getElementById("region");

regionSelect.addEventListener("change",function (event){
  const selectedRegion = event.target.value.toLowerCase();

  const filtered = allCountries.filter(element=>{
    if (selectedRegion === "") {
      return true;
    }
    if (element.region){
    return element.region.toLowerCase() ===selectedRegion;
    }
    return false;
  });
  displayCountries(filtered);
});
