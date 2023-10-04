import { Game } from '../src/bowling/bowling';

let g: Game = new Game()

beforeEach(() => {
  g = new Game()
})

describe('Bowling Score', () => {

  test('Все броски мимо', () => {
    rollMany(20, 0)
    expect(g.score()).toBe(0)
  })

  test('Каждый бросок - 1 кегля (счёт 20)', () => {
    rollMany(20, 1)
    expect(g.score()).toBe(20)
  })

  test('Если выпадает spare, то бонус к следующему первому броску', () => {
    rollSpare()
    g.roll(9)
    expect(g.score()).toBe(28)
  })

  function rollSpare(): void {
    g.roll(5)
    g.roll(5) //spare
  }

  function rollMany(countRolls: number, pins: number): void {
    for (let i = 0; i < countRolls; i++) {
      g.roll(pins)
    }
  }
})




// import calcScore from "../src/bowling/bowling";
// import assert from 'assert';

// describe ("Bowling Score", function () {

//   it("Все броски мимо", function () {
//     const rolls = Array(20).fill(0);
//     const result = calcScore(rolls);
//     const expected = 0;
//     assert.equal(result, expected);
//   });

//   it("Каждый бросок - 1 кегля (счёт 20)", function () {
//     const rolls = Array(20).fill(1);
//     const result = calcScore(rolls);
//     const expected = 20;
//     assert.equal(result, expected);
//   });

//   it("Все страйки (300)", function () {
//     const rolls = Array(12).fill(10);
//     const result = calcScore(rolls);
//     const expected = 300;
//     assert.equal(result, expected);
//   });

//   it("Если выпадает spare, то бонус к следующему броску", function () {
//     const rolls = [
//       5, 5, // spare
//       5, 3,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//     ];
//     const result = calcScore(rolls);
//     const expected = 23;
//     assert.equal(result, expected);
//   });

//   it("Spare в финальном фрейме даёт бонусный бросок", function () {
//     const rolls = [
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       7, 3, 8
//     ];
//     const result = calcScore(rolls);
//     const expected = 18;
//     assert.equal(result, expected);
//   });

//   it("Страйк в финальном фрейме даёт два бонусных броска", function () {
//     const rolls = [
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       10, 10, 1
//     ];
//     const result = calcScore(rolls);
//     const expected = 21;
//     assert.equal(result, expected);
//   });

//   it("Если страйк, то бонус на X2 бонус следующего броска", function () {
//     const rolls = [
//       10,
//       2, 3,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//       0, 0,
//     ];
//     const result = calcScore(rolls);
//     const expected = 20;
//     assert.equal(result, expected);
//   });

// }); 