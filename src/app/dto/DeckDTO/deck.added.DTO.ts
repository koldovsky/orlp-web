
export class NewDeckDTO {
  public name: string;
  public description: string;
  public categoryId: number;

  constructor(name: string, description: string, categoryId: number) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;

  }
}
