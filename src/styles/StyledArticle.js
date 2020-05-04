import styled from 'styled-components'

const StyledArticle = styled.article`
  margin: 0 auto;
  max-width: 75ch;
  padding: 3rem 1.5rem;

  @media screen and (min-width: 56.25em) {
    padding: 3rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  h2 {
    margin-top: 3rem;
  }

  .blog-post-title {
    margin-bottom: 0.5rem;
  }

  .blog-post-date {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  .gatsby-highlight {
    margin: 1.5rem 0;
  }

  hr {
    color: transparent;
    margin: 6rem 0 0;
  }
`

export default StyledArticle
