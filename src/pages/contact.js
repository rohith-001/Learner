import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Contact from "../components/Reuseable/Contact/contact"


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="about-background"
    />
    <Infoblock heading="How can we helop"/>
    <Contact />
  </Layout>
)

export const query = graphql`
{ img: file(relativePath: { eq: "contact.jpg" }) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
}`

export default ContactPage