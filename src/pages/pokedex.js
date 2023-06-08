import { allPokemon, filterByRarity } from "../dataController.js";
import {
  orderByNumberAsc,
  orderByNumberDesc,
  orderByAlphaA,
  orderByAlphaZ,
} from "../dataController.js";
import { filterByType, searchByName } from "../dataController.js";

function createCard(pokemon) {
  let allPills = "";
  for (const pill of pokemon.type) {
    allPills +=
      `<div class='pill pill--${pill}'>` +
      "<p class='pill__text'>" +
      pill +
      "</p>" +
      "</div>";
  }

  const card = `<div class="card">
    <figure class="card__figure">
      <div class="card__bg">
        <img class="card__img" src=${pokemon.img} >
      </div>
    </figure>
    <div class="card__content">
      <p class="card__num">N° ${pokemon.num}</p>
      <p class="card__name">${pokemon.name}</p>
      <div class="card__pills">${allPills}</div>
    </div>
  </div>`;
  return card;
}

function createNotFound() {
  const notFound = `<article class="notFound">
  <h2 class="notFound__title">Opps!</h2>
  <p class="notFound__para">The pokémon your looking for doesn’t exist on the list.</p>
  <figure>
    <img class="notFound__img" src="../assets/sleeping-pikachu-PhotoRoom.png" alt="sleeping pikachu" />
  </figure>
</article>`;
  return notFound;
}

function renderDataToHtml(data) {
  const cards = document.getElementById("cards");
  //Clean
  cards.innerHTML = "";
  if (data.length === 0) {
    cards.innerHTML = createNotFound();
  } else {
    for (let i = 0; i < data.length; i++) {
      cards.innerHTML += createCard(data[i]);
    }
  }
}

const copieAllPokemon = [...allPokemon];
renderDataToHtml(copieAllPokemon);

//Search by name
const searchName = document.getElementById("searchName");

searchName.onkeyup = (event) => {
  const valueInput = event.target.value;
  console.log("event.target.value", event.target.value);
  if (typeof event.target.value === "string") {
    const arraySearch = searchByName(copieAllPokemon, valueInput);
    console.log("searchByName ", arraySearch);
    renderDataToHtml(arraySearch);
  }
};
//Filter by Type
const pokemonType = document.getElementById("pokemonType");

pokemonType.addEventListener("input", function (e) {
  const event = e.inputType ? "input" : "selected";
  const selectedOption = e.target.value.toLowerCase();
  if (event === "selected") {
    const filterPokeByType = filterByType(copieAllPokemon, selectedOption);
    renderDataToHtml(filterPokeByType);
  }
});

//Filter by Rarity
const pokemonRarity = document.getElementById("pokemonRarity");

pokemonRarity.addEventListener("input", function (e) {
  const event = e.inputType ? "input" : "selected";
  const selectedOption = e.target.value.toLowerCase();
  if (event === "selected") {
    const filterPokemonByRarity = filterByRarity(
      copieAllPokemon,
      selectedOption
    );
    renderDataToHtml(filterPokemonByRarity);
  }
});

// Sort Buttons Section
const buttonSortAlphaA = document.getElementById("sortAlphaA");
const buttonSortAlphaZ = document.getElementById("sortAlphaZ");
const buttonSortAscNumber = document.getElementById("sortAscNumber");
const buttonSortDescNumber = document.getElementById("sortDescNumber");

buttonSortAlphaA.addEventListener("click", function () {
  const sortAlphaA = orderByAlphaA(copieAllPokemon);
  renderDataToHtml(sortAlphaA);
});

buttonSortAlphaZ.addEventListener("click", function () {
  const sortAlphaZ = orderByAlphaZ(copieAllPokemon);
  renderDataToHtml(sortAlphaZ);
});

buttonSortAscNumber.addEventListener("click", function () {
  const sortAscNumber = orderByNumberAsc(copieAllPokemon);
  renderDataToHtml(sortAscNumber);
});

buttonSortDescNumber.addEventListener("click", function () {
  const sortDescNumber = orderByNumberDesc(copieAllPokemon);
  renderDataToHtml(sortDescNumber);
});

// Clear Button
const buttonClear = document.getElementById("clear");
 
buttonClear.addEventListener("click", function() {
  document.getElementById("searchName").value = "";
  document.getElementById("pokemonRarity").value = "";
  document.getElementById("pokemonType").value = "";
  
}) 
  

 
  
 


