export class Barcode {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
    if (!this.value.match(/^[a-zA-Z0-9]+$/)) {
      throw new Error('Invalid barcode');
    }
  }
  static create(value: string): Barcode {
    return new Barcode(value);
  }

  getValue(): string {
    return this.value;
  }
}
