import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from 'gatsby'
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamPhotoSection from "../components/Reuseable/about/TeamPhotoSection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="about learn code online"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoBlock heading="A message from CEO "/>
    <Infoblock heading="About us"/>
    <TeamPhotoSection/>
  </Layout>
)

export const query = graphql`
{ img: file(relativePath: { eq: "about.jpg" }) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
}`

export default AboutPage
