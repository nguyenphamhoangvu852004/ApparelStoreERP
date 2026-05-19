import { Address } from './Address';
import { Birthday } from './Birthday';
import { Name } from './Name';
import { Phone } from './Phone';
import { UUID } from './UUID';

export type HumanProps = {
  id: UUID;
  name: Name;
  phone: Phone;
  birthday: Birthday;
  address: Address;
};

export class HumanProfile {
  private readonly name: Name;
  private readonly phone: Phone;
  private readonly birthday: Birthday;
  private readonly address: Address;

  constructor(props: HumanProps) {
    this.name = props.name;
    this.phone = props.phone;
    this.birthday = props.birthday;
    this.address = props.address;
  }

  public getFullName(): string {
    return this.name.getFullname();
  }

  public getPhone(): Phone {
    return this.phone;
  }
  public getBirthday(): Birthday {
    return this.birthday;
  }
  public getAddress(): Address {
    return this.address;
  }
}
