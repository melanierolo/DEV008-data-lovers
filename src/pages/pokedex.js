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
      <button class="btn-poke" id="${pokemon.num}">READ MORE</button>
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
  const baseInfo = `
    <div>
      <img class="card__img" src=${pokemon.img} >
      <p>Height: ${pokemon.size["height"]}</p>
      <p>Weight: ${pokemon.size["weight"]}</p>
    </div>
    <div>
      <p>${pokemon.name}</p>
      <p>${pokemon.num}</p>
      <h3>About:</h3>
      <p>${pokemon.about}</p>
    </div>`;

  const baseStats = `
      <div>
        <h3>Base Stats</h3>
      </div>
      <div>
        <label for="maxHp">max-hp:</label>
        <progress id="maxHp" value="${pokemon.stats["max-hp"]}" max="255">  </progress>
      </div>
      <div>
        <label for="maxCp">max-cp:</label>
        <progress id="maxCp" value="${pokemon.stats["max-cp"]}" max="100"></progress>
      </div>
      <div>
        <label for="stamina">base-stamina:</label>
        <progress id="stamina" value="${pokemon.stats["base-stamina"]}" max="100"></progress>
      </div>
      <div>
        <label for="defense">base-defense:</label>
        <progress id="defense" value="${pokemon.stats["base-defense"]}" max="200"></progress>
      </div>
      <div>
        <label for="attack">base-attack:</label>
        <progress id="attack" value="${pokemon.stats["base-attack"]}" max="190"></progress>
      </div>
      `;

  const effectivenessType = `       <div>
  <div><h3>Effectiveness Type</h3></div>
  <div>
    <div><p>Resistant</p></div>
    <div><p>Weaknesses</p></div>
    <div><p>Special-attack</p></div>
  </div>
</div>`;
  const modalContent = `
<div>
  <div>${baseInfo}</div>
  <div>${baseStats}</div>
  <div>${effectivenessType}</div>
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
  console.log(buttonsCards);
  let count = 0;

  for (const buttonCard of buttonsCards) {
    buttonCard.addEventListener("click", function () {
      count++;
      console.log(count);
      const pokemonInfo = copieAllPokemon.filter(
        (pokemon) => pokemon.num === buttonCard.id
      )[0];
      console.log(pokemonInfo);

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
  modalContent.classList.add("modalContent");
  modalContentBtn.classList.add("modalContent__btn");
  modalContentText.classList.add("modalContent__text");

  //add id on the button
  btnClose.setAttribute("id", "btnCloseModal");

  //Add Text
  btnClose.textContent = "x";

  /*//Add text
console.log(buttonCard.id);
console.log(pokemonInfo);*/
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
