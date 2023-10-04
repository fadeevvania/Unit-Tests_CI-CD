export class Game {

  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0

  score(): number {
    let score = 0 //сумма очков
    let frameIndex = 0 //индекс текущего броска
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) { //strike
        score += 10 + this.strikeBonus(frameIndex)
        frameIndex++
      }
      else if (this.isSpare(frameIndex)) { //spare
        score += 10 + this.spareBonus(frameIndex) //удваивание следующего броска
        frameIndex += 2 //переход к след. фрейму
      } else {
        score += this.sumFrameScore(frameIndex);
        frameIndex += 2
      }
    }
    return score
  }

  private sumFrameScore(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  private strikeBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
  }

  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 2]
  }

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10
  }
  
  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
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