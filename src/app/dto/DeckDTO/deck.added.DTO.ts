
export class NewDeckDTO {
  public name: string;
  public description: string;
  public categoryId: number;
  public synthaxToHighlight: String;
  public image: any;

  constructor(name: string, description: string, categoryId: number, synthaxToHighlight: String) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.synthaxToHighlight = synthaxToHighlight;
  }
}
