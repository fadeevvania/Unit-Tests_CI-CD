export class Game {

  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0

  score(): number {
    let score = 0 //сумма очков
    let frameIndex = 0 //индекс текущего броска
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) { //spare
        score += 10 + this.rolls[frameIndex + 2] //удваивание следующего броска
        frameIndex += 2 //переход к след. фрейму
      } else {
        score += this.rolls[frameIndex] + this.rolls [frameIndex+1];
        i += 2
      }
    }
    return score
  }
  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins
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