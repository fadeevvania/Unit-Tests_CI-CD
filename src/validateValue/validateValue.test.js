const valitateValue = require("./validateValue");

describe('validateValue',()=>{
    test('Валидация значения', () => {
        expect(valitateValue(50)).toBe(true);
    })
    test('Меньше корректного', () => {
        expect(valitateValue(-1)).toBe(false);
    })
    test('Больше корректного', () => {
        expect(valitateValue(101)).toBe(false);
    })
    test('Пограничное значение снизу ', () => {
        expect(valitateValue(0)).toBe(true);
    })
    test('Пограничное значение сверху', () => {
        expect(valitateValue(100)).toBe(true);
    })

})