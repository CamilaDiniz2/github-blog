import { createContext } from "react";

interface GithubApiPersonalData{
  name: string,
  login: string,
  company: string,
  followers: number,
  avatar_url: string
}

export const GithubApi = createContext({} as GithubApiPersonalData)