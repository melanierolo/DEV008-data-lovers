import { example, allPokemon } from "../dataController.js";

console.log(example, allPokemon);

function createCard(pokemon) {
  let allPills = "";
  for (const pill of pokemon.type) {
    allPills += "<div>" + pill + "</div>";
  }

  const card = `<div class="card">
    <div>
      <img src=${pokemon.img} >
    </div>
    <div>
      <p>N° ${pokemon.num}</p>
      <p>${pokemon.name}</p>
      <div>${allPills}</div>
    </div>
  </div>`;
  return card;
}

const cards = document.getElementById("cards");

for (let i = 0; i < allPokemon.length; i++) {
  cards.innerHTML += createCard(allPokemon[i]);
}
