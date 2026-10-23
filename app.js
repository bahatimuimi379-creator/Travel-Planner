"use strict";
console.log("app.js is running");

const views = document.querySelectorAll(".view");
const API = "http://localhost:4001/places"
let allCountries = [];

const place_body = document.querySelector("#featured-places")


const divCountries = document.querySelector("#countries")

fetch(API)
  .then(response => response.json())
  .then(data => {
    allCountries = data;
    displayPlaces(data);
  }).catch(error => console.log(error))

function displayPlaces(data) {

  console.log(data)
  data.forEach((element) => {
    place_body.innerHTML += `
    <section class="card" style="max-width: 500px">
          <img style="max-height:300px"; src=${element.imageUrl}class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${element.name}</h4>
            <p class="card-text"  class=" card-description">${element.description}</p>
            <a href="#" class="btn-solid theme-primary" onclick="showDescription(event)">View</a>
          </div>
        </section>
    `;

  });
  function showDescription(event) {
    event.preventDefault();
    const card = event.target.closest('.card');

    const description = card.querySelector('.card-description')
    console.log(description)

    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'block'

    } else {
      description.style.display = 'none';
    }
  }

}
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); 
  var n = document.getElementById('form-note'), nm = document.getElementById('c-name').value.trim();
  if (!nm || !document.getElementById('c-email').value.trim() || !document.getElementById('c-msg').value.trim()) 
    { n.textContent = 'Fill in your name, email and message, then send again.'; return; }
  n.textContent = 'Thanks ' + nm + ', Form submission successful.'; e.target.reset();
});
 

const popup = document.querySelector("#popup")
const about_btn = document.querySelector("#about-btn")
const close=document.querySelector("#close")
about_btn.addEventListener(`click`,()=>{
  popup.showModal()
})

close.addEventListener(`click`,()=>{
  popup.close()
})