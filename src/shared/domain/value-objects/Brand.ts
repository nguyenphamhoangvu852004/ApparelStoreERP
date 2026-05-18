type GenderType = 'Male' | 'Female' | 'Unisex' | 'Kids';
export class Gender {
  private readonly value: GenderType;
  constructor(value: GenderType) {
    this.value = value;
  }

  getValue(): GenderType {
    return this.value;
  }
}
