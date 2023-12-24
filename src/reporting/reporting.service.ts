import { Injectable } from '@nestjs/common';
import { CreateReportingDto } from './dto/create-reporting.dto';
import { UpdateReportingDto } from './dto/update-reporting.dto';

@Injectable()
export class ReportingService {
  create(createReportingDto: CreateReportingDto) {
    console.log(createReportingDto);
    return 'This action adds a new reporting';
  }

  findAll() {
    return `This action returns all reporting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporting`;
  }

  update(id: number, updateReportingDto: UpdateReportingDto) {
    console.log(updateReportingDto);
    return `This action updates a #${id} reporting`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporting`;
  }
}
