import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment';
import { LogService } from 'src/log/log.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logService: LogService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, body, ip } = req;
    const start = Date.now();

    res.on('finish', async () => {
      const { statusCode } = res;
      const responseTime = Date.now() - start;
      console.debug(
        `[${method}] - ${statusCode} ${originalUrl} - ${responseTime}ms ${ip} ${res.locals.error}`,
      );

      await this.logService.create({
        datetime: moment().toISOString(),
        method,
        statusCode,
        path: originalUrl,
        body: JSON.stringify(body),
        error: res.locals.error,
        ip,
      });
    });

    next();
  }
}
