import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from 'gatsby'
import HeroSection from "../components/Reuseable/HeroSection"
import Coursecart from "../components/Reuseable/Card/Coursecart"
import Bundle from '../components/Reuseable/Card/Bundle'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      title="Learner"
      subtitle="I am always learning"
  />
    <Coursecart courses={data.courses}/>
    <Bundle bundle={data.bundle} />
  </Layout>
)

export const query = graphql`
{ courses:allContentfulCourses{
  edges{
    node{
      id
      title
      price
      category
      description{
        description
      }
      image{
        fixed(width:200, height:120){
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
}

  bundle:allContentfulBundles {
    edges {
      node {
        id
        title
        price
        image {
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

export default IndexPage
