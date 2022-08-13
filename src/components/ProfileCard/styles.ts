import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  width: 100%;
  max-width: 892px;
  background-color: ${(props) => props.theme['base-profile']};

  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 2rem;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 2rem 2.5rem;

  border-radius: 10px;

  @media (max-width: 833px) {
    display: flex;
    flex-direction: column;
  }
`

export const ImageBox = styled.img`
  max-width: 148px;
  max-height: 148px;
  border-radius: 8px;

  @media (max-width: 420px) {
    margin: 0 auto;
  }
`

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileInfoBio = styled.span`
  @media (max-width: 420px) {
    text-align: center;
  }
`

export const ProfileInfoName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;

  @media (max-width: 420px) {
    flex-direction: column;
  }

  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: bold;

    @media (max-width: 420px) {
      margin-bottom: 1rem;
    }
  }
`
export const GithubLinkBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${(props) => props.theme.blue};
  line-height: 0;

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
  }
`

export const ProfileInfoText = styled.span`
  margin-bottom: 1.5rem;
`

export const ProfileInfoCards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 2.5rem;

  margin-top: 1.5rem;

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
