import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRole } from './entities/user-role.entity';
import { UserProfile } from './entities/user-profile.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Address } from 'src/address/entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserProfile, UserRole, Order, Address]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
