const square = require('./square')

describe('square',()=>{

    test('Вызов один раз', () => {
      
        const spyMathPow = jest.spyOn(Math,'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })


    test('Возов ни разу', () => {
       
        const spyMathPow = jest.spyOn(Math,'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    afterEach(()=>{
        jest.clearAllMocks()
    })
 })