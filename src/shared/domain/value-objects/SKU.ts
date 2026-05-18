export class SKU {
  private constructor(public readonly value: string) {}

  static create(value: string): SKU {
    if (!value || value.trim().length === 0) {
      throw new Error('SKU cannot be empty');
    }
    return new SKU(value.trim().toUpperCase());
  }
}
