import { createContext, ReactNode, useEffect, useState } from 'react'

interface personalGithubDataProps {
  avatar_url: string
  html_url: string
  name: string
  login: string
  bio: string
  company: string
  followers: number
}

interface GitHubApiContextType {
  personalGithubData: personalGithubDataProps
}

export const GithubApiContext = createContext({} as GitHubApiContextType)

interface GithubApiProviderProps {
  children: ReactNode
}

export function GithubApiProvider({ children }: GithubApiProviderProps) {
  const [personalGithubData, setPersonalGithubData] =
    useState<personalGithubDataProps>([])

  const username = 'camiladiniz2'

  async function loadPersonalGithubData() {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    setPersonalGithubData(data)
  }

  useEffect(() => {
    loadPersonalGithubData()
  }, [])
  return (
    <GithubApiContext.Provider value={{ personalGithubData }}>
      {children}
    </GithubApiContext.Provider>
  )
}
