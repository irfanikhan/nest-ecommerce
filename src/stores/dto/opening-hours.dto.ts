import { IsString } from 'class-validator';

export class OpeningHoursDto {
  @IsString()
  day: string;

  @IsString()
  open: string;

  @IsString()
  close: string;
}
