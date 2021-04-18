import React from "react";
import Layout from "../../components/layout";
import Helmet from "react-helmet";
import { GatsbyImage } from "gatsby-plugin-image";
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
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Clay, Roger, and Beau"
      />
      <p>
        This next picture is my daughter. She’s the latest addition to the
        family and she is a true joy to be around. I’m excited to get to know
        her personality more and more as she gets older.
      </p>
      <GatsbyImage
        image={data.mer.childImageSharp.gatsbyImageData}
        alt="Meredith"
      />
    </>
  </Layout>
);

Father.propTypes = {
  data: object,
};

export default Father;

export const query = graphql`
  query FatherQuery {
    file: file(name: { eq: "boys-and-clay" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    mer: file(name: { eq: "mer" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
