import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import IntegrationNav from "../../../components/integration-nav";

const ObjectiveFive = () => (
  <Layout>
    <Helmet>
      <title>
        Simply Diffrient - Integration of Ed Tech Portfolio - Objective 5
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <IntegrationNav />
    <h3>
      Objective 5: Understand and apply information literacy strategies to
      evaluate the quality of educational resources and tools.
    </h3>
    <p>
      I can evaluate various technologies and make a determination on the
      quality of the tool.
    </p>
    <h4>Artifact</h4>
    <iframe
      title="Decision Making Matrix - SMART Board 7000"
      css={{
        width: "100%"
      }}
      src="https://clay.app.box.com/embed/s/tedjfa5h98dvrozkg5s0y3rcfq9v6v2a"
      width="800"
      height="550"
      frameBorder="0"
      allowFullScreen
      webkitallowfullscreen
      msallowfullscreen
    />
    <h4>Reflection</h4>
    <p>
      The decision making matrix (DMM) presented above in my artifact is an
      example of a tool I've learned to use in order to make better decisions
      about technology. It forces me to take an objective look at various
      technologies, and it can help guide me in selecting technologies. In the
      above artifact I used the DMM successfully as an information literacy
      strategy to successfully evaulate the quality of the SMART board. I
      believe I have met this objective.
    </p>
    <h4>Goal</h4>
    <p>
      I plan to continue to use the matrix as I make decisions related not only
      to education, but also to other aspects of my profession.
    </p>
  </Layout>
);

export default ObjectiveFive;
