import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubModule } from './github/github.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LogModule } from './log/log.module';
import {RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get('URI_CONNECTION_MONGODB'),
      }),
    }),
    GithubModule,
    LogModule,
    RepositoryModule,
  ],
  controllers: [],
  providers: [
    ConfigService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
