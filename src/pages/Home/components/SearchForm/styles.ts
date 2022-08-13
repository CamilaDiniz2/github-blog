import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 892px;
  margin: 0 auto;
  margin-top: 1.5rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    height: 50px;
    background-color: ${(props) => props.theme['base-input']};
    border: 0;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['base-border']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      color: ${(props) => props.theme['base-text']};
    }
  }
`
