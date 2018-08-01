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

const ObjectiveFour = () => (
  <Layout>
    <Helmet>
      <title>
        Simply Diffrient - Integration of Ed Tech Portfolio - Objective 4
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <h3>
      Objective 4: Participate in an online learning environment, discussions,
      and tele-collaboration.
    </h3>
  </Layout>
);

export default ObjectiveFour;
