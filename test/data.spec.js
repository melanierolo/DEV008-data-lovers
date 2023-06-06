//import pokemon from "../src/data/pokemon/pokemon.js";
import { orderByAlphaA, orderByAlphaZ } from "../src/dataController.js";
import { searchByName, filterByType } from "../src/dataController.js";

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
});

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
});

describe("Test para buscar por nombre", () => {
  it("is a function", () => {
    expect(typeof orderByNumberDesc).toBe("function");
  });
  it("Buscando coincidencias en el arreglo de nombres el valor ingresado('el')", () => {
    const valorIngresado = "el";
    const arreglo = [
      { name: "elena" },
      { name: "mateo" },
      { name: "angel" },
      { name: "martina" },
    ];
    const arregloResultado = [{ name: "elena" }, { name: "angel" }];
    expect(searchByName(arreglo, valorIngresado)).toEqual(arregloResultado);
  });
});

describe("Test filtrar por tipo", () => {
  it("is a function", () => {
    expect(typeof orderByNumberDesc).toBe("function");
  });
  it("Buscando en un arreglo de frutas el tipo dulce", () => {
    const tipo = "dulce";
    const arreglo = [
      { name: "manzana roja", type: ["dulce"] },
      { name: "limón", type: ["acido"] },
      { name: "higo", type: ["dulce"] },
      { name: "maracuyá", type: ["acido"] },
    ];
    const arregloResultado = [
      { name: "manzana roja", type: ["dulce"] },
      { name: "higo", type: ["dulce"] },
    ];
    expect(filterByType(arreglo, tipo)).toEqual(arregloResultado);
  });
});


