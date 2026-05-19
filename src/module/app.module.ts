import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ProductModule } from './product.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [UserModule, ProductModule, AuthModule],
})
export class AppModule {}
