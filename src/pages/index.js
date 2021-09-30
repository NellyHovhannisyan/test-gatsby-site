import * as React from 'react';
import Layout from '../components/Layout.js';
import { graphql } from 'gatsby';
import Img from "gatsby-image";

const IndexPage = ({data}) => {
  console.log(data.file.childImageSharp.fluid);
  return (
    <Layout >
    <h1>HELLO EVERYBODY </h1>
    <Img
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
   </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "preezma-cover-last.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
