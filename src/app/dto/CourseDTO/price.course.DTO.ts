export class CoursePriceDTO {
  public courseId: string;
  public price: number;

  constructor(courseId: string, price: number) {
    this.courseId = courseId;
    this.price = price;
  }
}
