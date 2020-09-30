import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <br/>
    <Infoblock heading="VISION"/>
    <DualInfoBlock heading="TEAM"/>
  </Layout>
)

export default AboutPage
