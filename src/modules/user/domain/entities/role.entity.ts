import { Permission } from './permission.entity';
type RoleProps = {
  id: number;
  name: string;
  description: string;
  permissions: Permission[];
};

export class Role {
  private readonly id: number;
  private readonly name: string;
  private readonly description: string;
  private readonly persimmions: Permission[];
  constructor(props: RoleProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.persimmions = props.permissions;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.description;
  }
  public getPermissions(): Permission[] {
    return this.persimmions;
  }
}
