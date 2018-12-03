export class NewDeckDTO {
  public name: string;
  public description: string;
  public categoryId: number;
  public syntaxToHighlight: String;
  public price: number;

  constructor(name: string, description: string, categoryId: number, syntaxToHighlight: String,
              price: number) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.syntaxToHighlight = syntaxToHighlight;
    this.price = price;
  }
}
