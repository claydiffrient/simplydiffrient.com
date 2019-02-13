import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Link to="/idet/utah-legislation/">← Legistature Project</Link>
        <h1 css={{ marginTop: "1rem", marginBottom: "0.1rem" }}>
          {post.frontmatter.title}
        </h1>
        <small>
          {post.frontmatter.date}
          {" - "}
          {`${post.timeToRead} minute read`}
        </small>
        <div
          css={{ marginTop: "1.5rem" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      timeToRead
    }
  }
`;
