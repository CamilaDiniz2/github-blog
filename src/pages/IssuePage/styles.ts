import styled from 'styled-components'

export const IssuePrincipalCardContainer = styled.div`
  width: 100%;
  max-width: 892px;
  margin: 0 auto;
  margin-top: -5rem;
`

export const IssueCardInfo = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const IssueTitle = styled.strong`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: bold;
`

export const IssueSecondaryInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  margin-top: 1rem;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 0.5rem;
  }
`
export const IssueContent = styled.div`
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  p {
    line-height: 160%;
  }
`
