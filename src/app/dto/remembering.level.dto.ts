export class RememberingLevelDTO {
  constructor(public levelId: number, public orderNumber: number, public name: string,
              public numberOfPostponedDays: number) {
  }

  equals(level: RememberingLevelDTO): boolean {
    if (level === null) {
      return false;
    }
    return level.levelId === this.levelId && level.orderNumber === this.orderNumber && level.name === this.name &&
      level.numberOfPostponedDays === this.numberOfPostponedDays;
  }
}
