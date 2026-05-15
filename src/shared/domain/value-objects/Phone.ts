const VIETNAM_PHONE_PREFIXES = {
  Viettel: [
    '086',
    '096',
    '097',
    '098',
    '032',
    '033',
    '034',
    '035',
    '036',
    '037',
    '038',
    '039',
  ],

  Vinaphone: ['088', '091', '094', '081', '082', '083', '084', '085'],

  Mobifone: ['089', '090', '093', '070', '076', '077', '078', '079'],

  Vietnamobile: ['052', '056', '058', '092'],

  Gmobile: ['059', '099'],

  Itelecom: ['087'],
};
type NetworkCarrier = keyof typeof VIETNAM_PHONE_PREFIXES;

type PhoneProps = {
  value: string;
};
export class Phone {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(props: PhoneProps): Phone {
    Phone.validate(props);
    return new Phone(props.value.trim());
  }

  private static validate(props: PhoneProps): void {
    const valueNormalized = props.value
      .trim()
      .replace(/\s+/g, '')
      .replace(/-/g, '')
      .replace(/^\+84/, '0')
      .replace(/^84/, '0');
    if (!/^0\d{9}$/.test(valueNormalized)) {
      throw new Error('Invalid Vietnamese phone number');
    }

    const prefix = valueNormalized.slice(0, 3);

    const allPrefixes = Object.values(VIETNAM_PHONE_PREFIXES).flat();

    if (!allPrefixes.includes(prefix)) {
      throw new Error('Invalid Vietnamese phone prefix');
    }
  }

  public getNetworkCarrier(): NetworkCarrier {
    const prefix = this.value.slice(0, 3);

    for (const [carrier, prefixes] of Object.entries(VIETNAM_PHONE_PREFIXES)) {
      if (prefixes.includes(prefix)) {
        return carrier as NetworkCarrier;
      }
    }

    throw new Error('Unknown Vietnamese network carrier');
  }

  public equals(other: Phone): boolean {
    return this.value === other.value;
  }
}
