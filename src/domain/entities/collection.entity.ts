type CollectionProps = {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
};
export class Collection {
  private readonly id: string;
  private name: string;
  private slug: string;
  private logoUrl: string;

  constructor(props: CollectionProps) {
    this.id = props.id;
    this.name = props.name;
    this.slug = props.slug;
    this.logoUrl = props.logoUrl;
  }
}
