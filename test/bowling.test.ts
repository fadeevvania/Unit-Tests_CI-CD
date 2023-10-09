
import { Game } from '../src/bowling/bowling'; 
 
let g: Game = new Game(20) ;
 
beforeEach(() => { 
  g = new Game(20) ;
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
    rollMany(5, 40) 
    expect(g.score()).not.toBeGreaterThan(0) 
  })


  test('Отрицательные броски', () => { 
    g.roll(-3)
    g.roll(-10)
    expect(g.score()).not.toBeLessThan(0) 
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
    g.roll(3);  
    expect(g.score()).toBe(18); / Ошибка /
  }); 
   
  test('Если в последнем фрейме спэр, то один бонусный бросок', () => { 
    rollMany(18, 0);  
    rollSpare();  
    g.roll(5);  
    expect(g.score()).toBe(15); / Ошибка /
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
