import { Injectable } from '@nestjs/common';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';

@Injectable()
export class ShippingService {
  create(createShippingDto: CreateShippingDto) {
    console.log(createShippingDto);
    return 'This action adds a new shipping';
  }

  findAll() {
    return `This action returns all shipping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shipping`;
  }

  update(id: number, updateShippingDto: UpdateShippingDto) {
    console.log(updateShippingDto);
    return `This action updates a #${id} shipping`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipping`;
  }
}
