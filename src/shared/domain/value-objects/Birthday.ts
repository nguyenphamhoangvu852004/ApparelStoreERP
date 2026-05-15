type BirthdayProps = {
  value: Date;
};

export class Birthday {
  private readonly value: Date;

  private constructor(value: Date) {
    this.value = value;
  }

  public static create(props: BirthdayProps): Birthday {
    Birthday.validate(props);
    return new Birthday(props.value);
  }

  private static validate(props: BirthdayProps): void {
    if (!(props.value instanceof Date) || isNaN(props.value.getTime())) {
      throw new Error("The value is not instance of 'Date' type");
    }
  }

  public getValue(): Date {
    return this.value;
  }
  public equals(other: Birthday): boolean {
    return this.value.getTime() === other.value.getTime();
  }
}
