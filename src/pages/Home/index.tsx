import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ProfileCard } from '../../components/ProfileCard'
import { IssueCard } from './components/IssueCard'
import { SearchForm } from './components/SearchForm'
import {
  HomeContainer,
  PublicationsInfoBox,
  HomeContent,
  IssuesList,
} from './styles'

interface IssuesRepositoryProps {
  id: number
  title: string
  body: string
  created_at: Date
}

export function Home() {
  const [issuesGitHubRepository, setIssuesGitHubRepository] = useState<
    IssuesRepositoryProps[]
  >([])

  const username = 'camiladiniz2'
  const repository = 'github-blog'

  async function loadIssuesGithubApi() {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repository}/issues`,
    )
    const data = await response.json()
    setIssuesGitHubRepository(data)
  }

  useEffect(() => {
    loadIssuesGithubApi()
  }, [])

  console.log(issuesGitHubRepository)
  return (
    <HomeContainer>
      <Header />
      <ProfileCard />
      <HomeContent>
        <PublicationsInfoBox>
          <strong>Publicações</strong>
          <span>0 publicações</span>
        </PublicationsInfoBox>

        <SearchForm />

        <IssuesList>
          {issuesGitHubRepository.map((issue) => {
            return (
              <IssueCard
                key={issue.id}
                title={issue.title}
                body={issue.body}
                createdAt={issue.created_at}
              />
            )
          })}
        </IssuesList>
      </HomeContent>
    </HomeContainer>
  )
}
