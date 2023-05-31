import { example, allPokemon } from "../dataController.js";

console.log(example, allPokemon);

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
