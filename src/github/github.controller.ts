import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GithubService } from './github.service';
import { QueryIssuesDto } from './dto/query-issues.dto';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('issues')
  getIssues(
    @Query('limit') limit: string,
    @Query('page') page: string,
    @Body() body: QueryIssuesDto,
  ) {
    return this.githubService.getIssues(body.owner, body.repo, limit || '30', page);
  }

  @Get('issue/:owner/:repo/:idIssue')
  getIssue(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Param('idIssue') idIssue: string,
  ) {
    return this.githubService.getIssue(owner, repo, idIssue);
  }

  @Get('issue/:owner/:repo/:idIssue/comments')
  getIssueComments(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Param('idIssue') idIssue: string,
  ) {
    return this.githubService.getIssueComments(owner, repo, idIssue);
  }
}
