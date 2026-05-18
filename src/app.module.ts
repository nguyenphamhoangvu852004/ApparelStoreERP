import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { Module } from './product/src/modules/.module';
import { ProductModule } from './product/product.module';
import { ProductModule } from './modules/product/product.module';
@Module({
  imports: [UserModule, Module, ProductModule],
})
export class AppModule {}
