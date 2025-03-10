import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {
  gallery,
} from '../../components/gallery.module.css'


const BlogPost = ({ data, children }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    {children}
    {data.mdx.frontmatter.images.map((file, index) => {
          const image = getImage(file)

          return (
            <div className={gallery}>
                <GatsbyImage
                  image={image}
                  alt=""
              />
            </div>
          )
        })}
  </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost