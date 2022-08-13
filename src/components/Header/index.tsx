import {HeaderContainer} from './styles'

import logoGitHubBlog from '../../assets/logo.svg'

export function Header(){
  return (
    <HeaderContainer>
      <img src={logoGitHubBlog} />
    </HeaderContainer>
  )
}