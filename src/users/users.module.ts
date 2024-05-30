import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { Profile } from './entities/profile.entity';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UsersModule {}
