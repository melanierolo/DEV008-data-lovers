//import pokemon from "../src/data/pokemon/pokemon.js";
import { orderByAlphaA, orderByAlphaZ } from "../src/dataController.js";

describe("Test para ordenar de forma alfabética de A-Z", () => {
  it("is a function", () => {
    expect(typeof orderByAlphaA).toBe("function");
  });
  it("ordenando un arreglo (A-Z)", () => {
    const arregloDesordenado = [
      { name: "María" },
      { name: "Daniel" },
      { name: "Elena" },
      { name: "José" },
    ];
    const arregloOrdenado = [
      { name: "Daniel" },
      { name: "Elena" },
      { name: "José" },
      { name: "María" },
    ];
    expect(orderByAlphaA(arregloDesordenado)).toEqual(arregloOrdenado);
  });
});

describe("Test para ordenar por número de forma alfabética de Z-A", () => {
  it("is a function", () => {
    expect(typeof orderByAlphaZ).toBe("function");
  });
  it("ordenando un arreglo(Z-A)", () => {
    const arregloDesordenado = [
      { name: "Carmen" },
      { name: "Francisco" },
      { name: "Ana" },
      { name: "Diego" },
    ];
    const arregloOrdenado = [
      { name: "Francisco" },
      { name: "Diego" },
      { name: "Carmen" },
      { name: "Ana" },
    ];
    expect(orderByAlphaZ(arregloDesordenado)).toEqual(arregloOrdenado);
  });
});

import { orderByNumberAsc, orderByNumberDesc } from "../src/dataController.js";

describe("Test para ordenar de forma numérica ascendente", () => {
  it("is a function", () => {
    expect(typeof orderByNumberAsc).toBe("function");
  });
  it("ordenando un arreglo (Numeros ascendentes)", () => {
    const arregloDesordenado = [
      { num: "120" },
      { num: "20" },
      { num: "3" },
      { num: "45" },
    ];
    const arregloOrdenado = [
      { num: "3" },
      { num: "20" },
      { num: "45" },
      { num: "120" },
    ];
    expect(orderByNumberAsc(arregloDesordenado)).toEqual(arregloOrdenado);
  });
})

describe("Test para ordenar de forma numérica descendente", () => {
  it("is a function", () => {
    expect(typeof orderByNumberDesc).toBe("function");
  });
  it("ordenando un arreglo (Numeros descendentes)", () => {
    const arregloDesordenado = [
      { num: "58" },
      { num: "210" },
      { num: "15" },
      { num: "130" },
    ];
    const arregloOrdenado = [
      { num: "210" },
      { num: "130" },
      { num: "58" },
      { num: "15" },
    ];
    expect(orderByNumberDesc(arregloDesordenado)).toEqual(arregloOrdenado);
  });
})

import { filterByRarity } from "../src/dataController.js";

describe("Test para saber si es una función", () => {
  it("is a function", () => {
    expect(typeof filterByRarity).toBe("function");
  });
  
  /*it("filtrando pokemons por rareza", () => {
    const newPokemon = [
      { name: "Pikachu", "pokemon-rarity":"normal" },
      { name: "Mewtwo", "pokemon-rarity":"legendary" },
      { name: "Bulbasaur", "pokemon-rarity":"normal" },
    ];

    
    it("should filter the Pokémon by rarity", () => {
      const filteredPokemons = filterByRarity(newPokemon, "normal");

      expect(filteredPokemons).toEqual([
        { name: "Pikachu", "pokemon-rarity":"normal" },
        { name: "Bulbasaur", "pokemon-rarity":"normal" },
      ]);
    
    });
  })});*/})
