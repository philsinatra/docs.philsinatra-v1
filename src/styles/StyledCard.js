import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    align-items: center;
    border-bottom: 1px solid var(--color-contraster);
    display: flex;
  }

  .img {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center left;
    height: 64px;
    margin-right: 1rem;
    width: 64px;

    @media (prefers-color-scheme: dark) {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.6);
    }
  }

  @media screen and (min-width: 38.125em) {
    a {
      border: 0;
      display: block;
    }

    .img {
      background-position: center;
      border-radius: 1rem;
      height: 272px;
      margin-bottom: 0.75rem;
      margin-right: 0;
      width: 272px;
    }
  }
`

export default StyledCard
