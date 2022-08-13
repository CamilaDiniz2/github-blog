import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  width: 100%;
  max-width: 892px;
  background-color: ${props => props.theme['base-profile']};

  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 2rem;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 2rem 2.5rem;

  border-radius: 10px;
  
`

export const ImageBox = styled.img`
  max-width: 148px;
  max-height: 148px;
`

export const ProfileInfoBox = styled.div`
   
`

export const ProfileInfoName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

 strong{
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: bold;

    margin-bottom: 1rem;
 }

 a{
  color: ${props => props.theme['blue']};

 }
`

export const ProfileInfoText = styled.span`
  margin-bottom: 1.5rem;
`

export const ProfileInfoCards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.5rem;

  margin-top: 1.5rem;
`