import { IssueCardContainer, IssueTitle, IssueContent } from './styles'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface IssuesRepositoryProps {
  id: number
  title: string
  body: string
  createdAt: Date
}

export function IssueCard({
  id,
  title,
  body,
  createdAt,
}: IssuesRepositoryProps) {
  const resumedBodyContent = body.toString().slice(0, 150)
  const dateFormatted = new Date(createdAt)
  console.log(dateFormatted)

  const createdAtDateRelativeToNow = formatDistanceToNow(dateFormatted, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <IssueCardContainer>
      <IssueTitle>
        <strong>{title}</strong>
        <span>{createdAtDateRelativeToNow}</span>
      </IssueTitle>
      <IssueContent>{resumedBodyContent}...</IssueContent>
    </IssueCardContainer>
  )
}
