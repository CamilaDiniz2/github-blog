import {
  ProfileCardContainer,
  ImageBox,
  ProfileInfoBox,
  ProfileInfoName,
  ProfileInfoCards,
  GithubLinkBox,
  ProfileInfoBio,
} from './styles'

import {
  FaShareSquare,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { useContext } from 'react'
import { GithubApiContext } from '../../contexts/GithubApiContext'

export function ProfileCard() {
  const { personalGithubData } = useContext(GithubApiContext)
  console.log(personalGithubData)

  return (
    <ProfileCardContainer>
      <ImageBox src={personalGithubData.avatar_url} />

      <ProfileInfoBox>
        <ProfileInfoName>
          <strong>{personalGithubData.name}</strong>
          <GithubLinkBox href={personalGithubData.html_url}>
            <span>github</span>
            <FaShareSquare size={12} />
          </GithubLinkBox>
        </ProfileInfoName>
        <ProfileInfoBio>{personalGithubData.bio}</ProfileInfoBio>
        <ProfileInfoCards>
          <div>
            <FaGithub size={16} />
            <p>{personalGithubData.login}</p>
          </div>
          <div>
            <FaBuilding size={16} />
            <p>{personalGithubData.company}</p>
          </div>
          <div>
            <FaUserFriends size={16} />
            <p>{personalGithubData.followers} seguidores</p>
          </div>
        </ProfileInfoCards>
      </ProfileInfoBox>
    </ProfileCardContainer>
  )
}
