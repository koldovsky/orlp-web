export class CoursePriceDTO {
  public courseId: number;
  public price: number;

  constructor(courseId: number, price: number) {
    this.courseId = courseId;
    this.price = price;
  }
}
