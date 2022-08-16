import { IssueCardContainer, IssueTitle } from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { NavLink } from 'react-router-dom'

interface IssueProps {
  number: number
  title: string
  body: string
  created_at: Date
  html_url?: string
  comments?: number
}

export function IssueCard({ number, title, body, created_at }: IssueProps) {
  const resumedBodyContent = body.toString().slice(0, 150)
  const createdAtDateRelativeToNow = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <IssueCardContainer>
      <NavLink to={`/issues/${number}`}>
        <IssueTitle>
          <strong>{title}</strong>
          <span>{createdAtDateRelativeToNow}</span>
        </IssueTitle>
        <p>{resumedBodyContent}...</p>
        <h5>Ver mais ...</h5>
      </NavLink>
    </IssueCardContainer>
  )
}
