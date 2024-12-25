import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from 'src/schemas/log.schema';

@Module({
  imports: [],
  providers: [GithubService],
  controllers: [GithubController],
  exports: [GithubService]
})
export class GithubModule {}
