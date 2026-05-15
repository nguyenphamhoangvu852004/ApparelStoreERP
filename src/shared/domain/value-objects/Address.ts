type AddressProps = {
  country: string;
  city: string;
  province?: string;
  district?: string;
  street?: string;
  postalCode?: string;
};
export class Address {
  private readonly country: string;
  private readonly city: string;
  private readonly province?: string;
  private readonly district?: string;
  private readonly street?: string;

  private constructor(props: AddressProps) {
    this.country = props.country;
    this.city = props.city;
    this.province = props.province;
    this.district = props.district;
    this.street = props.street;
  }
  public static create(props: AddressProps): Address {
    Address.validate(props);
    return new Address(props);
  }

  /**
   * When the validation become more complex, we have to split into service layer
   * @param props AddressProps
   */
  private static validate(props: AddressProps): void {
    if (props.postalCode?.length !== 5) {
      throw new Error('Invalid postal code');
    }
  }

  getCountry(): string {
    return this.country;
  }

  getCity(): string {
    return this.city;
  }

  getProvince(): string | undefined {
    return this.province;
  }

  getDistrict(): string | undefined {
    return this.district;
  }

  getStreet(): string | undefined {
    return this.street;
  }

  getFullAddress(): string {
    const parts: string[] = [];

    // Street + District
    if (this.street) parts.push(this.street);
    if (this.district) parts.push(this.district);

    // City + Province
    let cityProvince = this.city;
    if (this.province) {
      cityProvince += `, ${this.province}`;
    }
    parts.push(cityProvince);

    // Country
    parts.push(this.country);

    return parts.join(', ');
  }

  getShortAddress(): string {
    const parts: string[] = [];

    if (this.street) parts.push(this.street);
    if (this.district) parts.push(this.district);
    parts.push(this.city);

    return parts.join(', ');
  }

  getPostalCode(): string {
    return '700000';
  }

  public toString(): string {
    return [this.street, this.district, this.province, this.city, this.country]
      .filter(Boolean)
      .join(', ');
  }

  public equals(other: Address): boolean {
    if (!(other instanceof Address)) return false;
    return (
      this.country === other.country &&
      this.city === other.city &&
      this.province === other.province &&
      this.district === other.district &&
      this.street === other.street
    );
  }
}
