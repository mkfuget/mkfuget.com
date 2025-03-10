import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import { GatsbyImage, getImage, Img } from 'gatsby-plugin-image'
import {
  card,
  cardTitle,
  cardText,
  cardImage,
  cardContent
} from '../../components/card.module.css'



const BlogPage = ({ data }) => {

  return (
    <Layout pageTitle="My Blog Posts">

        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.hero_image)

          return ( 
            <article key={node.id}>
                  <div className={card}>
                    <div className={cardImage}>
                        <Link to={`/blog/${node.frontmatter.slug}`}>
                          <GatsbyImage 
                            image={image}
                            alt=""
                          />
                        </Link>
                      </div>
                    <div className={cardContent}>
                      <div className={cardTitle}>{node.frontmatter.title}</div>
                      <p className={cardText}>{node.excerpt}</p>
                    </div>
                  </div>
            </article>
          )
        })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }

        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage