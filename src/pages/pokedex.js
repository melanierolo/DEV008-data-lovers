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
      <button class="btn-poke btn btn--primary btn--flex" id="${pokemon.num}">READ MORE</button>
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

function createModalContent(pokemon) {
  console.log("modal pokemon", pokemon);

  /*Base Info */
  let typePills = "";
  for (const pill of pokemon.type) {
    typePills +=
      `<div class='pill pill--${pill}'>` +
      "<p class='pill__text'>" +
      pill +
      "</p>" +
      "</div>";
  }

  const baseInfo = `
    <div class="pokeInfo">
      <figure class="pokeInfo__fig">
        <img class="pokeInfo__img" src=${pokemon.img} >
      </figure>
      <div class="pokeInfo__sizes" >
        <h4>Height:</h4>
        <p>${pokemon.size["height"]}</p>
        <h4>Weight:</h4>
        <p>${pokemon.size["weight"]}</p>
      </div>
    </div>
    <div class="pokeInfoTwo">
      <div class="pokeInfoTwo__text">
        <p class="pokeInfoTwo__text-name">${pokemon.name}</p>
        <p class="pokeInfoTwo__text-number">N°${pokemon.num}</p>
      </div>
      <div class="pokeInfo__text">
        <h4>About:</h4>
        <p>${pokemon.about}</p>
        <h4>Types</h4>
        <div class="modalPills">
          ${typePills}
        </div>
      </div>
    </div>`;

  /*Base Stats */
  const baseStats = `<div class="baseStats">
      <div>
        <h3>Base Stats</h3>
      </div>
      <div>
        <label for="maxHp">max-hp:</label>
        <progress id="maxHp" value="${pokemon.stats["max-hp"]}" max="403">  </progress>
        <span>${pokemon.stats["max-hp"]}</span>
      </div>
      <div>
        <label for="maxCp">max-cp:</label>
        <progress id="maxCp" value="${pokemon.stats["max-cp"]}" max="4178"></progress>
        <span>${pokemon.stats["max-cp"]}</span>
      </div>
      <div>
        <label for="stamina">Stamina:</label>
        <progress id="stamina" value="${pokemon.stats["base-stamina"]}" max="282"></progress>
        <span>${pokemon.stats["base-stamina"]}</span>
      </div>
      <div>
        <label for="defense">Defense:</label>
        <progress id="defense" value="${pokemon.stats["base-defense"]}" max="396"></progress>
        <span>${pokemon.stats["base-defense"]}</span>
      </div>
      <div>
        <label for="attack">Attack:</label>
        <progress id="attack" value="${pokemon.stats["base-attack"]}" max="300"></progress>
        <span>${pokemon.stats["base-attack"]}</span>
      </div>
    </div>
      `;

  /*Evolutions */
  const evolutionsPills = [pokemon.name];

  if (
    pokemon.evolution["next-evolution"] &&
    pokemon.evolution["prev-evolution"]
  ) {
    evolutionsPills.push(pokemon.evolution["next-evolution"][0]["name"]);
    evolutionsPills.unshift(pokemon.evolution["prev-evolution"][0]["name"]);
  } else if (
    pokemon.evolution["next-evolution"] &&
    !pokemon.evolution["prev-evolution"]
  ) {
    evolutionsPills.push(pokemon.evolution["next-evolution"][0]["name"]);
    if (
      Array.isArray(pokemon.evolution["next-evolution"][0]["next-evolution"])
    ) {
      evolutionsPills.push(
        pokemon.evolution["next-evolution"][0]["next-evolution"][0]["name"]
      );
    }
  } else if (
    !pokemon.evolution["next-evolution"] &&
    pokemon.evolution["prev-evolution"]
  ) {
    evolutionsPills.unshift(pokemon.evolution["prev-evolution"][0]["name"]);
    if (
      Array.isArray(pokemon.evolution["prev-evolution"][0]["prev-evolution"])
    ) {
      evolutionsPills.unshift(
        pokemon.evolution["prev-evolution"][0]["prev-evolution"][0]["name"]
      );
    }
  }

  console.log("evolutions", evolutionsPills);
  console.log("evolutions", pokemon.evolution);
  const stringEvolutions = evolutionsPills.join(" &#10095; ");

  const evolutions = `<div class="pokeEvolution">
      <h3>Evolutions</h3>
      <p>${stringEvolutions}</p>
    </div>`;

  /*Effectiveness Type */

  let resistantPills = "";
  for (const pill of pokemon.resistant) {
    resistantPills +=
      `<div class='pill pill--${pill}'>` +
      "<p class='pill__text'>" +
      pill +
      "</p>" +
      "</div>";
  }

  let weaknessesPills = "";
  for (const pill of pokemon.weaknesses) {
    weaknessesPills +=
      `<div class='pill pill--${pill}'>` +
      "<p class='pill__text'>" +
      pill +
      "</p>" +
      "</div>";
  }

  let specialAttackPills = "";
  const specialAttack = pokemon["special-attack"].map(
    (element) => element.name
  );
  for (const pill of specialAttack) {
    specialAttackPills +=
      `<div class='pill pill--normal'>` +
      "<p class='pill__text'>" +
      pill +
      "</p>" +
      "</div>";
  }

  const effectivenessType = `       
  <div class="pokeEffective">
    <div class="pokeEffective__title">
      <h3>Effectiveness Type</h3>
    </div>
    <div class="pokeEffective__types">
      <div>
        <p class="pokeEffective__subtitle">Resistant</p>
        <div class="modalPills">
          ${resistantPills} 
        </div>
      </div>
      <div>
        <p class="pokeEffective__subtitle">Weaknesses</p>
        <div class="modalPills">
          ${weaknessesPills} 
        </div>
      </div>
      <div>
        <p class="pokeEffective__subtitle">Special-attack</p>
        <div class="modalPills">
        ${specialAttackPills}
      </div>
      </div>
    </div>
  </div>`;

  const modalContent = `
<div class="contentGrid">
  <div class="info">${baseInfo}</div>
  <div class="stats modalBorderSection">${baseStats}</div>
  <div class="evolution modalBorderSection">${evolutions}</div>
  <div class="effectiveness modalBorderSection">${effectivenessType}</div>
</div>
`;
  return modalContent;
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

  //select all the buttons on the cards
  const buttonsCards = document.querySelectorAll(".btn-poke");

  for (const buttonCard of buttonsCards) {
    buttonCard.addEventListener("click", function () {
      //get the info of the pokemon
      const pokemonInfo = copieAllPokemon.filter(
        (pokemon) => pokemon.num === buttonCard.id
      )[0];

      //add a class called show in the modal
      if (modal.classList.contains("hide")) {
        modal.classList.remove("hide");
        modal.classList.add("show");
      }

      //add content on the modal
      modalContentText.innerHTML = createModalContent(pokemonInfo);
    });
  }
}

function createModal() {
  //Append to body
  document.body.appendChild(modal);

  //Append to modal, modalContent and modalContentBtn
  modal.appendChild(modalContent);
  modal.appendChild(btnClose);
  modalContent.appendChild(modalContentBtn);
  modalContent.appendChild(modalContentText);
  modalContentBtn.appendChild(btnClose);

  //Add classes(style)
  modal.classList.add("modal");
  modal.classList.add("hide");
  modalContent.classList.add("modalContent");
  modalContentBtn.classList.add("modalContent__btn");
  modalContentText.classList.add("modalContent__text");

  //add id on the button
  btnClose.setAttribute("id", "btnCloseModal");

  //Add Text
  btnClose.textContent = "x";
}

const copieAllPokemon = [...allPokemon];

/*--------Render all pokemon--------*/
renderDataToHtml(copieAllPokemon);

/*--------Search by name--------*/
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
/*--------Filter by Type-------*/
const pokemonType = document.getElementById("pokemonType");

pokemonType.addEventListener("input", function (e) {
  const event = e.inputType ? "input" : "selected";
  const selectedOption = e.target.value.toLowerCase();
  if (event === "selected") {
    const filterPokeByType = filterByType(copieAllPokemon, selectedOption);
    renderDataToHtml(filterPokeByType);
  }
});

/*--------Filter by Rarity-------*/
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

/*--------Sort Buttons Section--------*/
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

/*--------Clear Button--------*/
const buttonClear = document.getElementById("clear");

buttonClear.addEventListener("click", function () {
  document.getElementById("searchName").value = "";
  document.getElementById("pokemonRarity").value = "";
  document.getElementById("pokemonType").value = "";
});

/*--------Create a Modal--------*/
const modal = document.createElement("div");
const modalContent = document.createElement("div");
const modalContentBtn = document.createElement("div");
const modalContentText = document.createElement("div");
const btnClose = document.createElement("button");

createModal();

btnClose.addEventListener("click", () => {
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    modal.classList.add("hide");
  }
});
