import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import IntegrationNav from "../../../components/integration-nav";

const ObjectiveTwo = () => (
  <Layout>
    <Helmet>
      <title>
        Clay Diffrient - Integration of Ed Tech Portfolio - Objective 2
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <IntegrationNav />
    <h3>
      Objective 2: Identify learning theories and technology tools that support
      them.
    </h3>
    <p>
      I can identify learning theories and use technology tools that support
      them.
    </p>
    <h4>Artifact</h4>
    <iframe
      title="Programming Decisions PowerPoint"
      css={{
        width: "100%"
      }}
      src="https://clay.app.box.com/embed/s/6sbozh1paz7rbwkckowantmfnle8fybf"
      width="500"
      height="400"
      frameBorder="0"
      allowFullScreen
      webkitallowfullscreen
      msallowfullscreen
    />
    <h4>Reflection</h4>
    <p>
      I used the PowerPoint presentation presented in the artifact section as an
      example of using direct instruction aided by a technology tool, in this
      case PowerPoint. PowerPoint is a great tool for direct instruction because
      it allows an instructor to present information easily and directly to
      students. It supports linearly presenting and building upon information
      that you normally see when practicing direct instruction.
    </p>
    <h4>Goal</h4>
    <p>
      I plan to continually evaluate and select an appropriate tool when
      preparing instructional materials.
    </p>
  </Layout>
);

export default ObjectiveTwo;
