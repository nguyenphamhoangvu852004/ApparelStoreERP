type PermissionProps = {
  id: number;
  name: string;
  resource: string;
  action: string;
};
export class Permission {
  private readonly id: number;
  private readonly name: string;
  private readonly resource: string;
  private readonly action: string;
  constructor(props: PermissionProps) {
    this.id = props.id;
    this.name = props.name;
    this.resource = props.resource;
    this.action = props.action;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getResource(): string {
    return this.resource;
  }
  public getAction(): string {
    return this.action;
  }
}
