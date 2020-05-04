import React from 'react'
import { Link } from 'gatsby'
import StyledCard from '../styles/StyledCard'

const PostLink = ({ post }) => (
  <StyledCard>
    <Link to={post.frontmatter.path}>
      <div
        className="img"
        style={{
          backgroundImage: `url(./images/${post.frontmatter.thumbnail})`,
        }}
      />
      {post.frontmatter.title}
      {/* ({post.frontmatter.date}) */}
    </Link>
  </StyledCard>
)

export default PostLink
