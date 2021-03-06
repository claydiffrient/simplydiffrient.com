import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "@fontsource/signika/400.css";
import { white, green } from "../utils/variables";
import { Global } from "@emotion/react";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: "Personal website of Clay Diffrient",
            },
            {
              name: "keywords",
              content:
                "clay diffrient, software, programming, edtech, instructional design",
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Global
          styles={{
            body: {
              backgroundColor: green,
            },
          }}
        />
        <main
          css={{
            margin: "2rem auto",
            maxWidth: 960,
            backgroundColor: white,
            padding: "1rem",
          }}
        >
          {children}
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
