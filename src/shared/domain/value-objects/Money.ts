type Currency = 'VND' | 'USD';
type MoneyProps = {
  amount: number;
  currency: Currency;
};

export class Money {
  private readonly amount: number;
  private readonly currency: string;

  private constructor(data: MoneyProps) {
    this.amount = data.amount;
    this.currency = data.currency;
  }
  public static create(props: MoneyProps): Money {
    Money.validate(props);
    return new Money(props);
  }

  private static validate(props: MoneyProps): void {
    if (props.amount <= 0 || isNaN(props.amount)) {
      throw new Error('Invalid amount');
    }
    if (props.currency !== 'VND' && props.currency !== 'USD') {
      throw new Error('Invalid currency');
    }
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public equals(other: Money): boolean {
    if (other === null || other === undefined) {
      return false;
    }
    return this.amount === other.amount && this.currency === other.currency;
  }
}
