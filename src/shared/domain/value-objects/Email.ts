export class Email {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(value: string): Email {
    if (value == null) {
      throw new Error('Email cannot be empty');
    }

    if (typeof value !== 'string') {
      throw new Error('Email must be a string');
    }

    const trimmed = value.trim();

    if (trimmed.length === 0) {
      throw new Error('Email cannot be empty');
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      throw new Error('Invalid email format');
    }

    return new Email(trimmed); // nên lưu version đã trim
  }

  /**
   * Split to this function when the validaion become more complex
   * @param value string
   * @returns void
   */
  private static validate(value: string): void {
    console.log(value);
    return;
  }

  public getDomain(): string {
    return this.value.split('@')[1];
  }

  public getLocalPart(): string {
    return this.value.split('@')[0];
  }

  public equals(other: Email): boolean {
    if (other === null || other === undefined) {
      return false;
    }
    return this.value === other.value;
  }

  /**
   *
   * @returns a masked email string
   * @example nguye**********vu@gmail.com
   */
  public getMasked(): string {
    const local = this.getLocalPart();

    const domain = this.getDomain();

    if (local.length <= 2) {
      return `**@${domain}`;
    }

    const first = local[0];
    const last = local[local.length - 1];

    return `${first}****${last}@${domain}`;
  }

  public update(value: string): Email {
    return Email.create(value);
  }
  public getValue(): string {
    return this.value;
  }
}
