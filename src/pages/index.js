import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from 'gatsby'
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heaing="About us"/>
  </Layout>
)

export const query = graphql`
{ img: file(relativePath: { eq: "heromain.png" }) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
}`

export default IndexPage
