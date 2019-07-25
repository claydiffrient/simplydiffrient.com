import React from "react";
import Layout from "../../components/layout";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { object } from "prop-types";

const Father = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Clay Diffrient - Father</title>
    </Helmet>
    <>
      <h2>I’m a Father</h2>
      <p>
        This is a picture of me and my two boys. They are two of the most
        precious people in my life. They each have their own personalities, and
        I’m honorored to be their dad. I’ve learned so much from them! I’m now
        in the know about Paw Patrol, Blippi, and even PJ Masks. The oldest
        loves playing Minecraft and talking all about it. The youngest is
        obsessed with Iron Man, both the comic book character and the song!
      </p>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Clay, Roger, and Beau"
      />
      <p>
        This next picture is my daughter. She’s the latest addition to the
        family and she is a true joy to be around. I’m excited to get to know
        her personality more and more as she gets older.
      </p>
      <Img fluid={data.mer.childImageSharp.fluid} alt="Meredith" />
    </>
  </Layout>
);

Father.propTypes = {
  data: object
};

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
    mer: file(name: { eq: "mer" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
