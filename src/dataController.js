import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";

export const allPokemon = data.pokemon;

export const orderByNumberAsc = (array) => {
  const orderedArray = [...array].sort((a, b) =>
    parseInt(a.num) > parseInt(b.num) ? 1 : -1
  );
  return orderedArray;
};

export const orderByNumberDesc = (array) => {
  const orderedArray = [...array].sort((a, b) =>
    parseInt(a.num) < parseInt(b.num) ? 1 : -1
  );
  return orderedArray;
};

export const orderByAlphaA = (array) => {
  const orderedArray = [...array].sort((a, b) =>
    a.name[0] > b.name[0] ? 1 : -1
  );
  return orderedArray;
};

export const orderByAlphaZ = (array) => {
  const orderedArray = [...array].sort((a, b) =>
    a.name[0] < b.name[0] ? 1 : -1
  );
  return orderedArray;
};

export const filterByType = (newPokemon, type) => {
  const result = newPokemon.filter(function (pokemon) {
    return pokemon.type.includes(type);
  });
  return result;
};

export const filterByRarity = (newPokemon, type) => {
  const result = newPokemon.filter ((pokemon) =>
   pokemon["pokemon-rarity"] === type);
    
  return result;
};
 