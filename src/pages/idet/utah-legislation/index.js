import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

const blogPostIndexEntry = {
  backgroundColor: "#efefef",
  padding: "0.5rem",
  marginBottom: "1rem"
};

const UtahLegislation = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Clay Diffrient - Utah Legislation Tracking</title>
    </Helmet>
    <h2>Leadership in IDET - Utah Legislature Tracking</h2>
    <p>
      This blog follows my learnings about a piece of legislature brought
      forward during the 2019 general session of the Utah Legislature. It is a
      project for my Leadership in IDET course (ED PS 6445) being completed in
      Spring 2019 at the University of Utah.
    </p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div css={blogPostIndexEntry} key={node.id}>
        <h3 css={{ marginBottom: "0.1rem" }}>
          <Link to={`/idet/utah-legislation/${node.fields.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h3>
        <small>
          {node.frontmatter.date}
          {" - "}
          {`${node.timeToRead} minute read`}
        </small>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
);

export default UtahLegislation;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "utah-legislature-project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
