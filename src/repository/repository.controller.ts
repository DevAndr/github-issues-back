import { Controller, Get, Param } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { GithubService } from 'src/github/github.service';

@Controller('repository')
export class RepositoryController {
  constructor(private readonly githubService: GithubService) {}

  @Get(':owner/repositories')
  async getRepositories(@Param('owner') owner: string) {
    const repositories = await this.githubService.getRepositoriesByOwner(owner);
    return repositories;
  }
}
