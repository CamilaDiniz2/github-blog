import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const PublicationsInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 892px;
  margin: 0 auto;
  margin-top: 1rem;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`
export const HomeContent = styled.div`
  width: 100%;
  max-width: 892px;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 912px) {
    padding: 0 2rem;
    margin-top: 2rem;
  }
`
export const IssuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
