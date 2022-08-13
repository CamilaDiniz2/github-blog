import { Header } from '../../components/Header'
import { ProfileCard } from '../../components/ProfileCard'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <ProfileCard />
    </HomeContainer>
  )
}
