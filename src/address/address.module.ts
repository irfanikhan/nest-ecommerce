import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { UserProfile } from 'src/users/entities/user-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address, UserProfile])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
