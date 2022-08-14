import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface IssueProps {
  number: number
  title: string
  body: string
  created_at: Date
  html_url?: string
  comments?: number
}

interface IssuesContextType {
  issues: IssueProps[]
  fetchIssues: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

interface GithubApiProviderProps {
  children: ReactNode
}

export function IssuesProvider({ children }: GithubApiProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])

  async function fetchIssues(query?: string) {
    let response
    if (query !== undefined) {
      response = await api.get(
        `/search/issues?q=${query}repo:camiladiniz2/github-blog`,
      )
    } else {
      response = await api.get(`/search/issues?q=repo:camiladiniz2/github-blog`)
    }
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
