import React from 'react'
import { graphql } from 'gatsby'
import App from '../components/App'
import StyledArticle from '../styles/StyledArticle'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <App />
      <StyledArticle className="blog-post-container">
        <main role="main">
          <div className="blog-post" aria-labelledby="blog-post-title">
            <h1 id="blog-post-title" className="blog-post-title">
              {frontmatter.title}
            </h1>
            <h2 className="blog-post-date">{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </main>
      </StyledArticle>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
