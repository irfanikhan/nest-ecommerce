import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';
import { Address } from 'src/address/entities/address.entity';
import { OpeningHours } from './entities/opening-hours.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(OpeningHours)
    private readonly openingHoursRepository: Repository<OpeningHours>,
  ) {}
  async create(createStoreDto: CreateStoreDto) {
    const {
      address: addressData,
      openingHours: openingHoursData,
      ...storeInfo
    } = createStoreDto;

    // Create Address entity
    const address = this.addressRepository.create(addressData);
    await this.addressRepository.save(address);

    // Create OpeningHours entities
    const openingHours = this.openingHoursRepository.create(openingHoursData);
    await this.openingHoursRepository.save(openingHours);

    // Create Store entity
    const store = this.storeRepository.create({
      ...storeInfo,
      address,
      openingHours,
    });

    await this.storeRepository.save(store);

    return store;
  }

  findAll() {
    return `This action returns all stores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    console.log(updateStoreDto);
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
