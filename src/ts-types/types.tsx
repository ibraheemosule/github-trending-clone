export type userInfo = {
  username: string;
  url: string;
  avatar: string;
};

export type popularRepo = {
  repositoryName: string | null;
  description: null | string;
  url: string | null;
};

export type TRepositories = {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string | null;
  language: string | null;
  languageColor: string | null;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: userInfo[];
};

export type TDevelopers = {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: popularRepo;
};

export type IResponse = TRepositories[];
export interface IProps {
  repo: TRepositories;
}

export interface IProp {
  dev: TDevelopers;
}
