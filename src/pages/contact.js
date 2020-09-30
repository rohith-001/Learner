import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Reuseable/Contact/contact"


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <br/>
    <Contact />
    <br></br>
    <br></br>
  </Layout>
)


export default ContactPage