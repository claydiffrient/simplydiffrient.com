import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const Father = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Simply Diffrient - Father</title>
    </Helmet>
    <>
      {console.log(data)}
      <h2>I'm a Father</h2>
      This is a picture of me and my two boys. They are two of the most precious
      people in my life.
      <Img fluid={data.file.childImageSharp.fluid} />
    </>
  </Layout>
);

export default Father;

export const query = graphql`
  query FatherQuery {
    file: file(name: { eq: "boys-and-clay" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
