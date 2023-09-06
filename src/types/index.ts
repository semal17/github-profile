export type User = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  followers_url: string;
  following_url: string;
  followers: number;
  following: number;
  created_at: string;
  name: string;
  blog: string;
  public_repos: number;
  company: string;
  location: string;
  email: string;
  bio: string;
};

export type UserError = {
  message: string;
  documentation_url: string;
};
