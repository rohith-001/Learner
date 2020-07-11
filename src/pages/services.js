import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from 'gatsby'
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamPhotoSection from "../components/Reuseable/about/TeamPhotoSection"

const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="lco service"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoBlock heading="our main service"/>
    <Infoblock heading="Our service"/>
    <TeamPhotoSection/>
  </Layout>
)

export const query = graphql`
{ img: file(relativePath: { eq: "service.png" }) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
}`

export default ServicesPage
