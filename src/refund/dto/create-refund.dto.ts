import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

enum RefundStatus {
  PROCESSING = 'processing',
  APPROVED = 'approved',
  DECLINED = 'declined',
}

export class CreateRefundDto {
  @IsNumber()
  orderId: number;

  @IsNumber()
  amount: number;

  @IsString()
  reason: string;

  @IsOptional()
  @IsEnum(RefundStatus)
  status: RefundStatus;

  @IsString()
  refundMethod: string;

  @IsString()
  notes: string;
}
