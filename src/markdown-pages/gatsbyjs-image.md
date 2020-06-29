---
path: "/gatsbyjs-image"
date: "2020-06-29"
title: "Gatsby Image"
titleSlug: "gatsbyjs-image"
thumbnail: "gatsbyjs.svg"
---

## Install

```bash
yarn add gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem
```

Then in `gatsby-config.js`

```javascript
plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`]
```

Also, make sure you have set up a source plugin, so your images are available in `graphql` queries. For example, if your images live in a project folder on the local filesystem, you would set up `gatsby-source-filesystem` in `gatsby-config.js` like so:


```javascript
const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
```

## Usage

```javascript
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const MyComponent = props => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "costantino.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1152) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={imageData.file.childImageSharp.fluid} />
}
```

## Multiple Images

Create a separate component that can load all of the images, which then can be referenced as needed.

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ alt, filename }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1152) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename)
      )
      if (!image) return null

      const imageFluid = image.node.childImageSharp.fluid
      return <Img alt={alt} fluid={imageFluid} />
    }}
  />
)

Image.propTypes = {
  alt: PropTypes.string,
  filename: PropTypes.string.isRequired,
}

Image.defaultProps = {
  alt: '',
}

export default Image
```

Then import the component in the desired page and call it as needed.

```javascript
import Image from '../components/Image'

return <Image filename="filename.jpg" alt="alternative text" />
```

## References

- [Using Gatsby-Image With Your Site](https://www.gatsbyjs.org/tutorial/gatsby-image-tutorial/#using-static-query)
- [Gatsbyjs/gatsby-image/fluid-queries](https://www.gatsbyjs.org/packages/gatsby-image/#fluid-queries)
- [Using Fragments](https://www.gatsbyjs.org/docs/working-with-images/)
- [How to render multiple images in gatsby using image component](https://criscodes.hashnode.dev/how-to-render-multiple-images-in-gatsby-using-image-component-cjxoowlou000pfms1o91x71ts)
