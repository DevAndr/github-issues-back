import { ForbiddenException, Injectable } from '@nestjs/common';
import { requestGithub } from 'src/axios/axios-instance';
import { Issue } from './github.types';
import { Repository } from 'src/repository/repository.types';

@Injectable()
export class GithubService {
  async getIssue(owner: string, repo: string, idIssue: string): Promise<Issue> {
    try {
      const resp = await requestGithub.get(`/repos/${owner}/${repo}/issues/${idIssue}`);
      return resp.data;
    } catch (error) {
      console.debug(error)
      throw error;
    }
  }

  async getIssues(
    owner: string,
    repo: string,
    limit: string,
    page: string,
  ): Promise<Issue[]> {
    try {
      const resp = await requestGithub.get(`/repos/${owner}/${repo}/issues`, {
        params: {
          per_page: limit,
          page,
        },
      });
      return resp.data;
    } catch (error) {
      throw error;
    }
  }

  async getIssueComments(owner: string, repo: string, idIssue: string): Promise<Comment[]> {
    try {
      const resp = await requestGithub.get(`/repos/${owner}/${repo}/issues/${idIssue}/comments`);
      return resp.data;
    } catch (error) {
      throw error;
    }
  }

  searchIssues() {}

  async getRepositoriesByOwner(owner: string): Promise<Repository[]> {
    try {
      const resp = await requestGithub.get(`/users/${owner}/repos`);
      const repositories = resp.data as Repository[];
      return repositories.map(({ id, name }) => ({ id, name }));
    } catch (error) {
      throw error;
    }
  }
}
