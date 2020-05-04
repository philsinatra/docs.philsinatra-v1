import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: var(--color-black);
  color: var(--color-white);
  width: 100%;

  a,
  a:visited,
  a:hover,
  a:active {
    color: var(--color-white);
    text-decoration: none;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0;
    padding: 1rem;
  }
`

export default StyledHeader
