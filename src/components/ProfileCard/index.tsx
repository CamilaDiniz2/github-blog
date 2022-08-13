import {
  ProfileCardContainer, 
  ImageBox, 
  ProfileInfoBox, 
  ProfileInfoName,  
  ProfileInfoCards
} from './styles'

import {ArrowSquareOut} from 'phosphor-react'

export function ProfileCard(){
  return (
    <ProfileCardContainer>
      <ImageBox src="https://github.com/camiladiniz2.png" />
        
      <ProfileInfoBox>
        <ProfileInfoName>
          <strong>Camila Diniz</strong>
          <a>
            <span>github</span>
            <ArrowSquareOut size={16} />
          </a>
        </ProfileInfoName>
        <span>
          Tristique volutpat pulvinar vel massa, pellentesque 
          egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. 
          Nunc, volutpat pulvinar vel mass.
        </span>
        <ProfileInfoCards>
          <p>IFPE</p>
          <p>Rocketseat</p>
          <p>Seguidores</p>
        </ProfileInfoCards>
      </ProfileInfoBox>
    </ProfileCardContainer>
  )
}