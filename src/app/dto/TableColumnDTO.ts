export class TableColumnDTO {
  nameColumnParam: string;
  nameColumnForDisplay: string;
  symbolSorting: string;

  constructor(nameColumnParam: string, nameColumnForDisplay: string, symbolSorting: string) {
    this.nameColumnForDisplay = nameColumnForDisplay;
    this.nameColumnParam = nameColumnParam;
    this.symbolSorting = symbolSorting;
  }
}
