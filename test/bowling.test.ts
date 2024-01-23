
import { Game } from '../src/bowling/bowling'; 
 
let g: Game = new Game() ;
 
beforeEach(() => { 
  g = new Game() ;
}) 
 
describe('Bowling Score', () => { 
 
  test('Получение броска и результата одного фрейма', () => { 
    g.roll(3); 
    g.roll(4); 
    expect(g.score()).toBe(7); 
  }); 
 
  test('Все броски мимо', () => { 
    rollMany(20, 0) 
    expect(g.score()).toBe(0) 
  }) 
 
  test('Каждый бросок - 1 кегля (счёт 20)', () => { 
    rollMany(20, 1) 
    expect(g.score()).toBe(20) 
  }) 

  test('Слишком много бросков', () => { 
    rollMany(21, 1) 
    expect(g.score()).not.toBeGreaterThan(20) 
  })
  
  test('Слишком много Кегель', () => { 
  expect(()=>{
    rollMany(10,40);
  }).toThrowError("Значение pins не может быть больше 10")
  })

  test('Отрицательные броски', () => {  
    expect(() => {
      g.roll(-3);
    }).toThrowError("Значение pins должно быть больше или равно 0"); 
  })   
  
 
  test('Если выпадает spare, то бонус к следующему первому броску', () => { 
    rollSpare() 
    g.roll(9) 
    expect(g.score()).toBe(28) 
  }) 

  test('Если страйк, то бонус следующего фрейма', () => { 
    rollStrike() 
    g.roll(3) 
    g.roll(4) 
    expect(g.score()).toBe(24) 
  }) 
   
  test('Все страйки (300)', () => { 
    rollMany(12,10) 
    expect(g.score()).toBe(300) 
  }) 
  
  test('Если в последнем фрейме страйк, то два бонусных броска', () => {
    rollMany(18, 0);
    rollStrike();
    g.roll(5);
    g.roll(2);
    expect(g.score()).toBe(17);
  });

  test('Если в последнем фрейме спэр, то один бонусный бросок', () => {
    rollMany(18, 0);
    rollSpare();
    g.roll(3);
    expect(g.score()).toBe(13);
  });
  
  function rollStrike(): void{ 
    g.roll(10) 
  } 
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
