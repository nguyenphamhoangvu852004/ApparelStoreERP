import { Email } from '../../../../shared/domain/value-objects/Email';
import { HumanProfile } from '../../../../shared/domain/value-objects/HumanProfile';
import { UUID } from '../../../../shared/domain/value-objects/UUID';
import { Role } from './role.entity';

type UserProps = {
  id: UUID;
  email: Email;
  roles?: Role[];
  username: string;
  password: string;
  humanProfile?: HumanProfile;
};

export class User {
  private readonly id: UUID;
  private readonly username: string;
  private password: string;
  private readonly email: Email;
  private roles: Role[];
  private humanProfile?: HumanProfile;

  constructor(userProps: UserProps) {
    this.id = userProps.id;
    this.username = userProps.username;
    this.password = userProps.password;
    this.email = userProps.email;
    this.roles = userProps.roles ?? [];
    this.humanProfile = userProps.humanProfile;
  }

  public getAllRoles(): Role[] {
    return this.roles;
  }
  public setRole(listRole: Role[]): void {
    this.roles = [];
    this.roles = listRole;
  }
  public getHumanProfile(): HumanProfile | null {
    return this.humanProfile ?? null;
  }
}
