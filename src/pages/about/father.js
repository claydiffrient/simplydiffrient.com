import React from "react";
import Layout from "../../components/layout";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const Father = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Simply Diffrient - Father</title>
    </Helmet>
    <>
      <h2>I'm a Father</h2>
      <p>
        >This is a picture of me and my two boys. They are two of the most
        precious people in my life. They each have their own personalities, and
        I'm honorored to be their dad. I've learned so much from them! I'm now
        in the know about Paw Patrol, Blippi, and even PJ Masks.
      </p>
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
