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
      if (frame === 9 && (this.isStrike(frameIndex - 1) || this.isSpare(frameIndex - 2))) {
        score += this.lastFrameBonus();
      }
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
  private lastFrameBonus(): number {
    let bonus = 0;
    if (this.isStrike(this.maxRolls - 3)) {
      bonus += this.rolls[this.maxRolls - 3] + this.rolls[this.maxRolls - 2];
    } else if (this.isSpare(this.maxRolls - 3)) {
      bonus += this.rolls[this.maxRolls - 3];
    }
    return bonus;
  }
 

  private sumFrameScore(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }
  private strikeBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }
  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 2];
  }

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10;
  }
  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
  roll(pins: number): void {
    if (pins >= 0 && pins <= 10 && this.currentRoll < this.maxRolls) { 
      this.rolls[this.currentRoll++] = pins;
    }
  }
  
}