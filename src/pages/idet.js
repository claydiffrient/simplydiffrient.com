import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { defaultBtn } from "../utils/variables";
import { Link } from "gatsby";

const navButtonStyle = {
  width: "100%",
  ...defaultBtn
};

const IDET = () => (
  <Layout>
    <Helmet>
      <title>Simply Diffrient - IDET</title>
    </Helmet>
    <>
      <h2>Instructional Design and Educational Technology (IDET)</h2>
      This is a collection of materials from my studies in Instructional Design
      and Educational Technology from the University of Utah's College of
      Education.
      <ul css={{ marginTop: "15px", listStyle: "none" }}>
        <li css={{ listStyle: "unstyled" }}>
          <Link to="/idet/integration-portfolio" css={navButtonStyle}>
            Integration of Educational Technology - Portfolio
          </Link>
        </li>
        <li css={{ listStyle: "unstyled" }}>
          <Link to="/idet/utah-legislation" css={navButtonStyle}>
            Leadership in IDET - Utah Legislature Tracking
          </Link>
        </li>
      </ul>
    </>
  </Layout>
);

export default IDET;
