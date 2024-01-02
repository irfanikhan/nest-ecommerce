import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.storeRepository.find();
  }

  async findOne(id: number) {
    const store = await this.storeRepository.findOneBy({ id });

    if (!store) throw new NotFoundException('Store not found');
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    await this.findOne(id);

    return this.storeRepository.save(updateStoreDto);
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.storeRepository.delete(id);
  }
}
