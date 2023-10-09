export class Game {
  private rolls: number[];
  private currentRoll: number = 0;
  private maxRolls: number;

  constructor(maxRolls: number) {
    this.maxRolls = maxRolls;
    this.rolls = Array(maxRolls).fill(0);
  }
  public score(): number {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumFrameScore(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  private sumFrameScore(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  private strikeBonus(frameIndex: number): number {
    if (this.isStrike(frameIndex + 2)) {
      return 20; // если следующий фрейм тоже страйк, возвращаем 20 очков
    }
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  private spareBonus(frameIndex: number): number {
    if (this.isStrike(frameIndex + 2)) {
      return 10; // если следующий бросок страйк, возвращаем 10 очков 
    }
    return this.rolls[frameIndex + 2];
  }

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10
  }
  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
  }


  roll(pins: number): void {
    if (pins >= 0 && this.currentRoll < this.maxRolls) {
      this.rolls[this.currentRoll++] = pins;
    }
  }

}

