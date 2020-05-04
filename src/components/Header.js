import React from 'react'
import { Link } from 'gatsby'
import StyledHeader from '../styles/StyledHeader'

const Header = () => {
  return (
    <StyledHeader role="banner" aria-labelledby="site-heading">
      <Link to="/">
        <h1 id="site-heading">Phil's Notes</h1>
      </Link>
    </StyledHeader>
  )
}

export default Header
