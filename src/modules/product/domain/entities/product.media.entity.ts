import { MediaType } from '../../../../shared/enum/mediaType.enum';

export interface ProductMediaProps {
  url: string;
  type: MediaType;
  displayOrder: number;
  isPrimary?: boolean;
}

export class ProductMedia {
  public readonly url: string;
  public readonly type: MediaType;
  public readonly displayOrder: number;
  public readonly isPrimary: boolean;

  private constructor(props: ProductMediaProps) {
    this.url = props.url;
    this.type = props.type;
    this.displayOrder = props.displayOrder;
    this.isPrimary = props.isPrimary ?? false;
  }

  static create(props: ProductMediaProps): ProductMedia {
    if (!props.url) throw new Error('Media URL is required');
    return new ProductMedia(props);
  }
}
