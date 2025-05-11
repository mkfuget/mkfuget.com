import * as React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout pageTitle="Gallery">
      <p>This page is a work in progress but I would like to have it a comprehensive list of my photos with
        some filtering system. Like someone could type in turtle and it would just show all my turtle photos, or a 
        more specific species like angel fish. For now you can check out my photos from different dive sites I have been  
      <Link to="/">
      here
      </Link>  
         </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage