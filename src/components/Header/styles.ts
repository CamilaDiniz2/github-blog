import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-post']};
  height: 296px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    padding: 48px 0 128px 0;
  }
`
