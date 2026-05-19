import { Barcode } from '../../common/value-objects/Barcode';
import { Money } from '../../common/value-objects/Money';
import { SKU } from '../../common/value-objects/SKU';
import { SalesChannel } from '../../common/enum/salesChannel.enum';

// ====================== PRODUCT VARIANT ======================
export interface ProductVariantProps {
  id?: string; // UUID - optional for creation
  sku: string; // Will be converted to SKU Value Object
  price: Money; // Base price in VND
  barcode?: string;
  attributes?: Record<string, string | number | boolean>; // dynamic attributes (color, size, material...)
  channelPrices?: Partial<Record<SalesChannel, number>>;
}

export class ProductVariant {
  public readonly id: string;
  public readonly sku: SKU;
  public readonly barcode?: Barcode;
  public price: Money;
  public attributes: Record<string, any>;
  public channelPrices: Partial<Record<SalesChannel, number>>;

  private constructor(props: ProductVariantProps) {
    this.id = props.id || crypto.randomUUID();
    this.sku = SKU.create(props.sku);
    this.barcode = props.barcode ? Barcode.create(props.barcode) : undefined;
    this.price = props.price;
    this.attributes = props.attributes || {};
    this.channelPrices = props.channelPrices || {};
  }

  static create(props: ProductVariantProps): ProductVariant {
    if (!props.sku) throw new Error('SKU is required for ProductVariant');
    if (props.price.getAmount() < 0)
      throw new Error('Price cannot be negative');

    return new ProductVariant(props);
  }

  // Business methods
  updatePrice(newPrice: Money): void {
    if (newPrice.getAmount() < 0) throw new Error('Price cannot be negative');
    // In real DDD, you would create a new instance (immutable) or raise domain event
    this.price = newPrice; // mutable for simplicity, can be made immutable
  }

  addChannelPrice(channel: SalesChannel, price: number): void {
    this.channelPrices[channel] = price;
  }

  getPriceForChannel(channel: SalesChannel): number {
    return this.channelPrices[channel] ?? this.price.getAmount();
  }
}
