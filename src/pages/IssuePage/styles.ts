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

  @media (max-width: 512px) {
    justify-content: center;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 0.5rem;

    @media (max-width: 512px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    span {
      text-align: center;
    }
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

export const IssueNotFoundPage = styled.div`
  margin: 0 auto;
  text-align: center;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2.5rem 2rem;

  nav {
    text-align: left;

    a {
      color: ${(props) => props.theme.blue};
      line-height: 0;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
    }
  }

  h1 {
    margin-top: 2rem;
  }

  div {
    max-width: 200px;
    margin: 1rem auto;
  }
`
