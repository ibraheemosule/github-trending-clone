export type userInfo = {
  username: string;
  url: string;
  avatar: string;
};

export type repositories = {
  rank: number;
  usename: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: userInfo[];
};

export interface IResponse {
  data: repositories[]
}
