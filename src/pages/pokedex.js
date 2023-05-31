import { allPokemon } from "../dataController.js";

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

/*order by number
function orderByNumber(newArray, direction) {
  const orderedArray = newArray.sort((a, b) => {
    if (direction === "asc") {
      return a.num > b.num ? 1 : -1;
    } else if (direction === "desc") {
      return a.num < b.num ? 1 : -1;
    }
  });
  return orderedArray;
}

console.log("function sort-asc", orderByNumber(newArray, "asc"));
console.log("function sort-des", orderByNumber(newArray, "desc"));
*/
console.log("un solo pokemon", newPokemon[0].type);
