import { Module } from '@nestjs/common';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';
import { GithubService } from 'src/github/github.service';
import { GithubModule } from 'src/github/github.module';

@Module({
  imports: [GithubModule],
  controllers: [RepositoryController],
  providers: [RepositoryService]
})
export class RepositoryModule {}
