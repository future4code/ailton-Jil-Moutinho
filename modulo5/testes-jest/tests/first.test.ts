describe("Hello word!", () => {
  test("Ex00 - Retorna true se for par, false pra ímpar.", () => {
    expect(isEven(11)).toBe(false);
    console.log("Deu certo!");
  });

  test("Ex01 - Retorna a string em caixa alta.", () => {
    expect(upperCase("Mia")).toBe("MIA");
  });

  test("Ex02 - Retorna a string em array de letras.", () => {
    expect(wordToArray("Mia")).toEqual(["M", "i", "a"]);
  });

  test("Ex03 - Retorna a string em numero.", () => {
    expect(wordToNumber("3")).toEqual(3);
  });

  //toEqual e toBe, ambos funcionam...

  test("Ex04 - Retorna o tamanho da string.", () => {
    expect(wordToSize("Mia")).toBe(3);
  });

  test("Ex05 - Retorna um número int de 0 a 10.", () => {
    const numberToTest = randonNumber();
    expect(numberToTest).toBeLessThanOrEqual(10);
    expect(numberToTest).toBeGreaterThanOrEqual(1);
    console.log(numberToTest);
  });

  test("Ex06 - Retorna se tem Astrodev no Array.", () => {
    const teste = existAstrodev();
    expect(teste).toContain("Astrodev");
  });

  test("Ex07 - Retorna média do array e números.", () => {
    expect(roundAverage([1, 2, 3, 4, 5])).toBe(3);
  });

  test("Ex08 - Retorna a idade.", () => {
    expect(age(2017)).toBe(5);
  });

  test("Ex09 - Retorna data trocando “YYYY/MM/DD” para “DD/MM/YYYY”.", () => {
    expect(ageFullDate("2022/09/26")).toBe("26/09/2022");
  });
});

//Ex00
const isEven = (integer: number) => {
  if (integer % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

//Ex01
const upperCase = (word: string) => {
  return word.toUpperCase();
};

//Ex02
const wordToArray = (word: string) => {
  return word.split("");
};

//Ex03
const wordToNumber = (word: string) => {
  return Number(word);
};

//Ex04
const wordToSize = (word: string) => {
  return Number(word.length);
};

//Ex05
const randonNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

//Ex06
const existAstrodev = () => {
  return ["Mari", "Talita", "Juli", "Leo", "Astrodev", "Mia"];
};

//Ex07
const roundAverage = (arrayTest: number[]) => {
  let sum = 0;
  let index = 0;
  while (index < arrayTest.length) {
    sum = sum + arrayTest[index++];
  }

  return sum / arrayTest.length;
};

//Ex08
const age = (birthYear: number) => {
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

//Ex09
const ageFullDate = (birthDate: string) => {
  let birthDateArray = birthDate.split("/");
  let birthDateFormated =
    birthDateArray[2] + "/" + birthDateArray[1] + "/" + birthDateArray[0];

  return birthDateFormated;
};
