import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import { linkStyles, defaultBtn } from "../../../utils/variables";
import Link from "gatsby-link";

const navBtnStyle = {
  ...defaultBtn,
  fontSize: "0.9em",
  width: "100%"
};

const ObjectiveFive = () => (
  <Layout>
    <Helmet>
      <title>
        Simply Diffrient - Integration of Ed Tech Portfolio - Objective 5
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <h3>
      Objective 5: Understand and apply information literacy strategies to
      evaluate the quality of educational resources and tools.
    </h3>
  </Layout>
);

export default ObjectiveFive;
