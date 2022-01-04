export interface IState {
  loading: false;
  repositories: [];
  developers: [];
  error: "";
}
export interface UserInfo {
  username: string;
  href: string;
  avatar: string;
}

export interface Repo {
  name: string | null;
  description: string | null;
  url: string;
}

export interface TRepositories {
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  languageColor: string | null;
  forks: number;
  currentPeriodStars: number;
  builtBy: UserInfo[];
}

export interface TDevelopers {
  username: string;
  name: string;
  url: string;
  sponsorUrl: string | null;
  avatar: string;
  repo: Repo;
}
export interface IPropRepositories {
  repo: TRepositories;
}
export interface IPropDevelopers {
  dev: TDevelopers;
  index: number;
}
export interface TDeveloperRepo {
  name: string;
  description: string | null;
  url: string;
}

export type TDevelopersData = TDevelopers | undefined;
