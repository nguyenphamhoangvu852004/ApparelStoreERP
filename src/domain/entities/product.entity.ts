import { Gender } from '../../common/value-objects/Brand';
import { Money } from '../../common/value-objects/Money';
import { Season } from '../../common/value-objects/Season';
import { Style } from '../../common/value-objects/Style';
import { UUID } from '../../common/value-objects/UUID';
import { Brand } from './brand.entity';
import { Category } from './category.entity';
import { Collection } from './collection.entity';
import { ProductMedia } from './product.media.entity';
import { ProductVariant } from './product.variant.entity';

type ProductProps = {
  id: UUID;
  name: string;
  slug: string;
  brand: Brand;
  collection?: Collection;
  category: Category;
  season?: Season;
  gender: Gender;
  style: Style;
  basePrice: Money;
  listMedia?: ProductMedia[];
  variants?: ProductVariant[];
};
export class Product {
  private readonly id: UUID;
  private name: string;
  private slug: string;
  private brand: Brand;
  private category: Category;
  private gender: Gender;
  private style: Style;
  private basePrice: Money;
  private season?: Season;
  private collection?: Collection;
  private listMedia?: ProductMedia[];
  private variants?: ProductVariant[];

  constructor(props: ProductProps) {
    this.id = props.id;
    this.name = props.name;
    this.slug = props.slug;
    this.basePrice = props.basePrice;
    this.brand = props.brand;
    this.style = props.style;
    this.collection = props.collection;
    this.gender = props.gender;
    this.category = props.category;
    this.season = props.season;
  }
}
