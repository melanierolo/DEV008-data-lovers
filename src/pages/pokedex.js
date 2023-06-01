import { allPokemon } from "../dataController.js";

function createCard(pokemon) {
  let allPills = "";
  for (const pill of pokemon.type) {
    allPills +=
      "<div class='pill'>" +
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

const cards = document.getElementById("cards");

for (let i = 0; i < allPokemon.length; i++) {
  cards.innerHTML += createCard(allPokemon[i]);
}

//Filter by Type
const newPokemon = [...allPokemon];

function filterByType(newPokemon, type) {
  const result = newPokemon.filter(function (pokemon) {
    return pokemon.type.includes(type);
  });
  return result;
}

console.log("function filter-electric", filterByType(newPokemon, "electric"));

console.log("function filter-water", filterByType(newPokemon, "water"));
console.log("function filter-flying", filterByType(newPokemon, "flying"));
console.log("un solo pokemon", newPokemon[0].type);

const newPokemonTwo = [...allPokemon];

function orderByNumberAsc(array) {
  const orderedArray = [...array].sort((a, b) =>
    parseInt(a.num) > parseInt(b.num) ? 1 : -1
  );
  return orderedArray;
}

function orderByNumberDesc(array) {
  const orderedArray = [...array].sort((a, b) =>
    parseInt(a.num) < parseInt(b.num) ? 1 : -1
  );
  return orderedArray;
}

function orderByAlphaA(array) {
  const orderedArray = [...array].sort((a, b) =>
    a.name[0] > b.name[0] ? 1 : -1
  );
  return orderedArray;
}

function orderByAlphaZ(array) {
  const orderedArray = [...array].sort((a, b) =>
    a.name[0] < b.name[0] ? 1 : -1
  );
  return orderedArray;
}

const sortAsc = orderByNumberAsc(newPokemonTwo);
const sortDesc = orderByNumberDesc(newPokemonTwo);
const sortAtoZ = orderByAlphaA(newPokemonTwo);
const sortZtoA = orderByAlphaZ(newPokemonTwo);

console.log("function sort-asc", sortAsc);
console.log("function sort-desc", sortDesc);
console.log("function A-Z", sortAtoZ);
console.log("function Z-A", sortZtoA);
