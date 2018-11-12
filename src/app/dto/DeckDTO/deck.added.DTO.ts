
export class NewDeckDTO {
  public name: string;
  public description: string;
  public categoryId: number;
  public synthaxToHighlight: String;
  public points: number;

  constructor(name: string, description: string, categoryId: number, synthaxToHighlight: String,points: number) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.synthaxToHighlight = synthaxToHighlight;
    this.points = points;
  }
}
