export class Season {
  private readonly value: string;
  constructor(value: string) {
    this.value = value;
    if (!this.value.match(/^[a-zA-Z0-9]+$/)) {
      throw new Error('Invalid season');
    }
  }

  getValue(): string {
    return this.value;
  }
}
