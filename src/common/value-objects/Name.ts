type NameProps = {
  value: string;
};
export class Name {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(props: NameProps): Name {
    if (props.value.length === 0) {
      throw new Error('Name cannot be empty');
    }
    return new Name(props.value);
  }

  public getFirstname(): string {
    return this.parts()[0];
  }

  public getMiddlename(): string {
    const parts = this.parts();

    if (parts.length <= 2) {
      return '';
    }

    return parts.slice(1, -1).join(' ');
  }

  public getLastname(): string {
    const parts = this.parts();

    return parts[parts.length - 1];
  }

  public getFullname(): string {
    return this.value;
  }

  private parts(): string[] {
    return this.value.split(' ');
  }
}
