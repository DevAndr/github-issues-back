import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from 'src/schemas/log.schema';
import { CreateLogDto } from './dto/create-log.dto';
import { ResultQueryLogs } from './log.types';

@Injectable()
export class LogService {
  constructor(
    @InjectModel(Log.name) private readonly model: Model<LogDocument>,
  ) {}

  async create(data: CreateLogDto): Promise<Log> {
    return this.model.create({ ...data });
  }

  async getAll(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<ResultQueryLogs> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await Promise.all([
      this.model.find().skip(skip).limit(pageSize).exec(), 
      this.model.countDocuments(), 
    ]);
    
    return { data, total };
  }
}
