import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  streetAddress: string;

  @IsOptional()
  @IsString()
  aptSuiteUnit?: string;

  @IsString()
  city: string;

  @IsString()
  stateProvince: string;

  @IsString()
  postalCode: string;

  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsBoolean()
  isDefault: boolean;

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsString()
  formattedAddress?: string;

  @IsOptional()
  @IsString()
  placeId?: string;

  @IsOptional()
  @IsString()
  googleMapUrl?: string;
}
