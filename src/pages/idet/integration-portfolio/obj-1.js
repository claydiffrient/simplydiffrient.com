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

const ObjectiveOne = () => (
  <Layout>
    <Helmet>
      <title>
        Simply Diffrient - Integration of Ed Tech Portfolio - Objective 1
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <h3>
      Objective 1: Identify and know how to locate various kinds of technology
      resources and relate them to the teaching process.
    </h3>
  </Layout>
);

export default ObjectiveOne;
