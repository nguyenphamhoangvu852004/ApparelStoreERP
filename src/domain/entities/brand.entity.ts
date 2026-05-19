import { UUID } from '../../common/value-objects/UUID';

type BrandProps = {
  id: UUID;
  name: string;
  slug: string;
  logoUrl: string;
};

export class Brand {
  private readonly id: UUID;
  private name: string;
  private slug: string;
  private logoUrl: string;

  public constructor(props: BrandProps) {
    this.id = props.id;
    this.name = props.name;
    this.slug = props.slug;
    this.logoUrl = props.logoUrl;
  }
  // getters && setters
  getId(): UUID {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSlug(): string {
    return this.slug;
  }

  getLogoUrl(): string {
    return this.logoUrl;
  }

  setName(name: string): Brand {
    this.name = name;
    return this;
  }

  setSlug(slug: string): Brand {
    this.slug = slug;
    return this;
  }

  setLogoUrl(logoUrl: string): Brand {
    this.logoUrl = logoUrl;
    return this;
  }
}
