interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

interface Milestone {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  description: string;
  creator: User;
  open_issues: number;
  closed_issues: number;
  state: string;
  created_at: string;
  updated_at: string;
  due_on: string | null;
  closed_at: string | null;
}

interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: string | null;
}

interface Reactions {
  url: string;
  total_count: number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface SubIssuesSummary {
  total: number;
  completed: number;
  percent_completed: number;
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee: string | null;
  assignees: string[];
  milestone: Milestone;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  sub_issues_summary: SubIssuesSummary;
  active_lock_reason: string | null;
  draft: boolean;
  pull_request: PullRequest;
  body: string | null;
  closed_by: string | null;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: string | null;
  state_reason: string | null;
}

export interface Comment {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: User;
  created_at: string;
  updated_at: string;
  author_association: string;
  body: string;
  reactions: Reactions;
  performed_via_github_app: null | object;
};