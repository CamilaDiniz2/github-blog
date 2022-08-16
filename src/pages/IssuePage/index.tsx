import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaComment,
  FaGithub,
  FaShareSquare,
} from 'react-icons/fa'
import { NavLink, useParams } from 'react-router-dom'
import {
  IssuePrincipalCardContainer,
  IssueCardInfo,
  IssueTitle,
  IssueSecondaryInfo,
  IssueContent,
} from './styles'

interface IssueProps {
  number: number
  title: string
  body: string
  created_at: Date
  html_url?: string
  comments?: number
}

export function IssuePage() {
  const { id } = useParams()
  const [issue, setIssue] = useState<IssueProps>([])
  const [bodyContent, setBodyContent] = useState<string[]>([])
  const [dateToNow, setDateToNow] = useState<string>('')
  const username = 'camiladiniz2'
  const repositoryName = 'github-blog'

  async function loadIssue() {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repositoryName}/issues/${parseInt(
        id,
      )}`,
    )
    const data = await response.json()
    const body = await data.body.split('\n')
    const formattedDate = await formatDistanceToNow(new Date(data.created_at), {
      locale: ptBR,
      addSuffix: true,
    })
    setIssue(data)
    setBodyContent(body)
    setDateToNow(formattedDate)
  }

  useEffect(() => {
    loadIssue()
  }, [])

  return (
    <IssuePrincipalCardContainer>
      <IssueCardInfo>
        <nav>
          <NavLink to="/">
            <FaChevronLeft />
            <span>Voltar</span>
          </NavLink>

          <a href={issue.html_url}>
            <span>Ver no github</span>
            <FaShareSquare />
          </a>
        </nav>
        <IssueTitle>{issue.title}</IssueTitle>

        <IssueSecondaryInfo>
          <div>
            <FaGithub size={16} />
            <p>{username}</p>
          </div>
          <div>
            <FaCalendarAlt size={16} />
            <span>{dateToNow}</span>
          </div>
          <div>
            <FaComment size={16} />
            <p>
              {issue.comments}
              {issue.comments === 1 && ' comentário'}
              {issue.comments !== 1 && ' comentários'}
            </p>
          </div>
        </IssueSecondaryInfo>
      </IssueCardInfo>

      <IssueContent>
        {bodyContent.map((content) => {
          return (
            <div key={content}>
              <p>{content}</p>
            </div>
          )
        })}
      </IssueContent>
    </IssuePrincipalCardContainer>
  )
}
