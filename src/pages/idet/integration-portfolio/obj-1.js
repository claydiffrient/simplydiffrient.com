import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import IntegrationNav from "../../../components/integration-nav";

const ObjectiveOne = () => (
  <Layout>
    <Helmet>
      <title>
        Simply Diffrient - Integration of Ed Tech Portfolio - Objective 1
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <IntegrationNav />
    <h3>
      Objective 1: Identify and know how to locate various kinds of technology
      resources and relate them to the teaching process.
    </h3>
    <p>
      I am capable of showing how to relate various technologies to teaching.
    </p>
    <h3>Artifact</h3>
    <iframe
      title="Technology Integration Matrix"
      css={{
        width: "100%"
      }}
      src="https://clay.app.box.com/embed/s/xcikhugyal2th42os92hnoag9h8swe8n"
      width="500"
      height="400"
      frameborder="0"
      allowfullscreen
      webkitallowfullscreen
      msallowfullscreen
    />
    <h4>Reflection</h4>
    <p>
      Completing the matrix shown in the artifact section gave me a lot of
      insight into how various technologies get adopted and used for teaching
      and learning. It shows that I am able to identify and relate learning to
      technology use.
    </p>
    <h4>Goal</h4>
    <p>
      I plan to continue to critically evaluate the use of technology with
      education.
    </p>
  </Layout>
);

export default ObjectiveOne;
