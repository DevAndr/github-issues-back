import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { LogService } from './log.service';
import { Log } from 'src/schemas/log.schema';
import { ResponsePagination } from 'src/general/general.types';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get('all')
  async getLogs(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<ResponsePagination<Log>> {
    const { data, total } = await this.logService.getAll(page, limit);
    const totalPages = Math.ceil(total / limit) || 1;

    return {
      data,
      pagination: {
        total,
        totalPages,
        page: Number(page),
        limit: Number(limit),
      },
    };
  }
}
