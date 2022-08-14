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
import { useEffect, useState } from 'react'

interface personalGithubDataProps {
  avatar_url: string
  html_url: string
  name: string
  login: string
  bio: string
  company: string
  followers: number
}

export function ProfileCard() {
  const [personalGithubData, setPersonalGithubData] =
    useState<personalGithubDataProps>([])

  const username = 'camiladiniz2'

  async function loadPersonalGithubData() {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    setPersonalGithubData(data)
  }

  useEffect(() => {
    loadPersonalGithubData()
  }, [])

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
