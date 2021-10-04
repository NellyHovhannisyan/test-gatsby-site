import * as React from 'react'
import Layout from '../components/layout';
import Img from "gatsby-image";
import { graphql } from 'gatsby';

const Page = ({data}) => {
  return (
<Layout>
    <h1> {data.datoCmsNewpage.pageTitle}</h1>

    <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsNewpage.description,
          }}
        />

    <p> {data.datoCmsNewpage.description}</p>
    <div className="img">
    <Img
        fluid={data.datoCmsNewpage.image.fluid}
        alt="page image"
        style={{width:'30%', heigth:'auto', margin:'0 auto'}}
      />
    </div>
    </Layout>
  )};

  export default Page;

  export const query = graphql`
  query GetPage($slug: String!) {
    datoCmsNewpage(slug: { eq: $slug }) {
      pageTitle
      description
      image  {
        url
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      
      }
    }
  }
`