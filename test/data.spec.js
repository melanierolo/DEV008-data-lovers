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
