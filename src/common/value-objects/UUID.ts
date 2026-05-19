type UUIDProps = {
  value: string;
};
export class UUID {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value.trim();
  }

  public static create(props?: UUIDProps): UUID {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (props?.value === undefined) {
      return UUID.generate();
    }

    if (!uuidRegex.test(props.value.trim())) {
      throw new Error('Invalid UUID format');
    }
    return new UUID(props.value.trim());
  }

  public static generate(): UUID {
    const newUuid = crypto.randomUUID();
    return new UUID(newUuid);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UUID): boolean {
    return this.value === other.value;
  }
}
