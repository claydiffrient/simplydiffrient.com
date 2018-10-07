import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import IntegrationNav from "../../../components/integration-nav";
import { Link } from "gatsby";
import { linkStyles } from "../../../utils/variables";

const ObjectiveThree = () => (
  <Layout>
    <Helmet>
      <title>
        Simply Diffrient - Integration of Ed Tech Portfolio - Objective 3
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <IntegrationNav />
    <h3>
      Objective 3: Build a personal educational technology integration portfolio
      with evidence and artifacts.
    </h3>
    <p>
      I can put together an effective portfolio showing details about my
      learning and providing evidence of such.
    </p>
    <h4>Artifact</h4>
    <p>
      <Link css={linkStyles} to="/idet/integration-portfolio">
        Portfolio Home Page
      </Link>
    </p>
    <h4>Reflection</h4>
    <p>
      I created this portfolio using web technologies in a way that makes it
      easily extendable and reuseable for the future. I make a declaration about
      my ability to fullfil a standard, show artifacts as evidence, develop a
      narative around the artifacts, and present a goal for the future.
    </p>
    <h4>Goal</h4>
    <p>
      I plan to update and create other portfolios displaying my achievements in
      the future.
    </p>
  </Layout>
);

export default ObjectiveThree;
