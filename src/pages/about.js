import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="Bio">
      <p>This website is mostly for sharing my undersea photography work with as broad an auidence I can.</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage