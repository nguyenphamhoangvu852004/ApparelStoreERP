import { UUID } from '../../../../shared/domain/value-objects/UUID';

type CategoryProps = {
  id: UUID;
  name: string;
  slug: string;
  parentID: UUID;
  desctiption: string;
};
export class Category {
  private readonly id: UUID;
  private name: string;
  private slug: string;
  private parentID: UUID;
  private desctiption: string;

  constructor(props: CategoryProps) {
    this.id = props.id;
    this.name = props.name;
    this.slug = props.slug;
    this.parentID = props.parentID;
    this.desctiption = props.desctiption;
  }

  getId(): UUID {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSlug(): string {
    return this.slug;
  }

  getParentID(): UUID {
    return this.parentID;
  }

  getDesctiption(): string {
    return this.desctiption;
  }

  setName(name: string): Category {
    this.name = name;
    return this;
  }

  setSlug(slug: string): Category {
    this.slug = slug;
    return this;
  }

  setParentID(parentID: UUID): Category {
    this.parentID = parentID;
    return this;
  }

  setDesctiption(desctiption: string): Category {
    this.desctiption = desctiption;
    return this;
  }
}
