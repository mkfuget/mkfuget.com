import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
  site,
} from './layout.module.css'

// ... import statements

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    return (
    <div className={site}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/blog/blog" className={navLinkText}>
              Sites
             </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              Bio
            </Link>
          </li>
        </ul>
      </nav>
      <div className={container}>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
      </div>
    )
  }
  
  export default Layout