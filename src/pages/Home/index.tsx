import { useContext } from 'react'
import { ProfileCard } from './components/ProfileCard'
import { IssuesContext } from '../../contexts/IssuesContext'
import { IssueCard } from './components/IssueCard'
import { SearchForm } from './components/SearchForm'
import {
  HomeContainer,
  PublicationsInfoBox,
  HomeContent,
  IssuesList,
} from './styles'

export function Home() {
  const { issues } = useContext(IssuesContext)
  const numberOfIssuesCreated = issues.length

  return (
    <HomeContainer>
      <ProfileCard />
      <HomeContent>
        <PublicationsInfoBox>
          <strong>Publicações</strong>
          <span>{numberOfIssuesCreated} publicações</span>
        </PublicationsInfoBox>

        <SearchForm />

        <IssuesList>
          {issues.map((issue) => {
            return (
              <IssueCard
                key={issue.number}
                number={issue.number}
                title={issue.title}
                body={issue.body}
                created_at={issue.created_at}
              />
            )
          })}
        </IssuesList>
      </HomeContent>
    </HomeContainer>
  )
}
