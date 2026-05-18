import { Module } from '@nestjs/common';
import { ProductController } from './presentation/product.controller';
import { ProductService } from './application/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
