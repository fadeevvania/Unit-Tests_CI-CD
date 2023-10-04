export class Game{
  private _score: number = 0

  get score (): number{
    return this._score
  }
  roll (pins: number): void{
    this._score += pins
  }
  
}
  








// const calcScore = (rolls: number[]) => { 


//   let score = 0; 
//   let frameIndex = 0; 
//   for (let frame = 0; frame < 10; frame++) { 
//     const firstRoll = rolls[frameIndex]; 
//     if(firstRoll === 10) { 
//       // strike 
//       score += 10 + rolls[frameIndex+1] + rolls[frameIndex+2]; 
//       frameIndex++; 
//     } else { 
//       const secondRoll = rolls[frameIndex + 1]; 
//       score += firstRoll + secondRoll; 
//       if(firstRoll + secondRoll === 10) { 
//         // spare 
//         score += rolls[frameIndex + 2]; 
//       } 
//       frameIndex = frameIndex + 2; 
//     } 
//   } 
//   return score; 
// } 

// export default calcScore;