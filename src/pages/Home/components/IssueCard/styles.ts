import styled from 'styled-components'

export const IssueCardContainer = styled.a`
  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};

  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }
`

export const IssueTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.25rem;

  strong {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
export const IssueContent = styled.p``
