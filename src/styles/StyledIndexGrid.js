import styled from 'styled-components'

const StyledIndexGrid = styled.section`
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  margin: 0 auto;

  @media screen and (min-width: 38.125em) {
    display: grid;
    gap: 1.5rem 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(min(16rem, 100%), 1fr));
    justify-items: center;
    padding: 3rem;
  }

  a,
  a:visited,
  a:hover {
    color: var(--color-foreground);
  }

  a {
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 225ms ease-in-out;

    @media screen and (min-width: 38.125em) {
      &:hover {
        transform: scale(110%);
        text-decoration: none;
      }
    }
  }
`

export default StyledIndexGrid
