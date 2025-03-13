import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="Bio">
      <p>This website is mostly for sharing my undersea photography work with as broad an audience I can. Hoping to 
        improve my abilities over time while also seeing a lot of 
      </p>
      <p>Also works as documentation of my travelling and what different enviroments I have dove and shot photos in. 
        Long-term I think it would be cool to also include a full gallery of all my photos including ways to filter down to 
        specific enviromnents or species that I have seen. 
      </p>
      <StaticImage
        alt="MKFuget"
        src="..\images\MichaelFugetHeadshotWater.jpg"
      />

    </Layout>
  )
}

export const Head = () => <title>Bio</title>

export default AboutPage