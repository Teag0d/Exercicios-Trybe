// criar arquivo teste
// exportar / importar arquivo a ser testado

//importando
const { sub, saudacao, pets } = require("./script");
// criando teste

describe("Testes da função sub", () => {
  test("Subtrai 5 de 10, resultado 5", () => {
    expect(sub(10, 5)).toBe(5);
  });

  test("Subtrai 83 de 50, resultado -33", () => {
    expect(sub(50, 83)).toBe(-33);
  });

  test("Subtrai 56 de 100, resultado 44", () => {
    expect(sub(100, 56)).toBe(44);
  });
  test("Subtrai 56 de 100.55, resultado 44", () => {
    expect(sub(100.55, 56)).toBeCloseTo(44.55);
  });
});

describe("Testando saudacao()", () => {
  test("Testando se saudação() funciona", () => {
    expect(saudacao("Felizbino")).toMatch("Maaa oeeeeeee Felizbino");
  });
});

test("Verifica se array pets existe", () => {
  expect(Array.isArray(pets)).toBe(true);
});
