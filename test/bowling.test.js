const calcScore = require("../src/bowling/bowling")
const assert = require('assert');

describe("Bowling Score", function () {

  test("Все броски мимо", function () {
    const rolls = Array(20).fill(0);
    const result = calcScore(rolls);
    const expected = 0;
    assert.equal(result, expected);
  });

  test("Каждый бросок - 1 кегля (20)", function () {
    const rolls = Array(20).fill(1);
    const result = calcScore(rolls);
    const expected = 20;
    assert.equal(result, expected);
  });

  test("Все страйки (300)", function () {
    const rolls = Array(12).fill(10);
    const result = calcScore(rolls);
    const expected = 300;
    assert.equal(result, expected);
  });

  test("Если выпадает spare, то бонус к следующему броску", function () {
    const rolls = [
      5, 5, // spare
      5, 3,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ];
    const result = calcScore(rolls);
    const expected = 23;
    assert.equal(result, expected);
  });

  test("Spare в финальном фрейме даёт бонусный бросок", function () {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      7, 3, 8
    ];
    const result = calcScore(rolls);
    const expected = 18;
    assert.equal(result, expected);
  });

  test("Страйк в финальном фрейме даёт два бонусных броска", function () {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      10, 10, 1
    ];
    const result = calcScore(rolls);
    const expected = 21;
    assert.equal(result, expected);
  });

  test("Если страйк, то бонус на X2 бонус следующего броска", function () {
    const rolls = [
      10,
      2, 3,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ];
    const result = calcScore(rolls);
    const expected = 20;
    assert.equal(result, expected);
  });
});