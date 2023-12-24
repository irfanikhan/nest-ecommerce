import {
  IsArray,
  IsBoolean,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OpeningHoursDto } from './opening-hours.dto';
import { Type } from 'class-transformer';
import { CreateAddressDto as AddressDto } from 'src/address/dto/create-address.dto';

export class CreateStoreDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  contactEmail: string;

  @IsString()
  contactPhone: string;

  @ValidateNested()
  @Type(() => AddressDto)
  @IsObject()
  address: AddressDto;

  @ValidateNested({ each: true })
  @Type(() => OpeningHoursDto)
  @IsArray()
  openingHours: OpeningHoursDto[];

  @IsString()
  website: string;

  @IsArray({ each: true })
  socialMediaLinks: string[];

  @IsBoolean()
  isActive: boolean;
}
