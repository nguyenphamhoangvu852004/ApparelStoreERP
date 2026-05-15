import { Module } from '@nestjs/common';
import { UserService } from './application/usecases/user.service';
import { UserController } from './presentation/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
