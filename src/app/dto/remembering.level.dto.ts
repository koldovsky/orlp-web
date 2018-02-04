export class RememberingLevelDTO {
  constructor(public id: number, public orderNumber: number, public name: string,
              public numberOfPostponedDays: number) {
  }

 equals(level: RememberingLevelDTO): boolean {
    if (level === null) {
      return false;
    }
    return level.numberOfPostponedDays === this.numberOfPostponedDays;
  }
}
