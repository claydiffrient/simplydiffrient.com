import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import IntegrationNav from "../../../components/integration-nav";

import ryanResponseToClay from "../../../assets/ryan-response-toclay.png";
import clayResponseToKyle from "../../../assets/clay-response-to-kyle.png";

const ObjectiveFour = () => (
  <Layout>
    <Helmet>
      <title>
        Simply Diffrient - Integration of Ed Tech Portfolio - Objective 4
      </title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <IntegrationNav />
    <h3>
      Objective 4: Participate in an online learning environment, discussions,
      and tele-collaboration.
    </h3>
    <p>
      I can successfully participate and use online learning environments to
      communicate my ideas and learn from others' ideas effectively
    </p>
    <h4>Artifact</h4>
    <div
      css={{
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <div
        css={{
          flex: 1
        }}
      >
        <img
          css={{
            width: "100%",
            height: "auto"
          }}
          src={ryanResponseToClay}
          alt="Example image of a discussion where Ryan responds to Clay"
        />
      </div>
      <div
        css={{
          flex: 1
        }}
      >
        <img
          css={{
            width: "100%",
            height: "auto"
          }}
          src={clayResponseToKyle}
          alt="Example image of a discussion where Clay responds to Kyle"
        />
      </div>
    </div>
    <h4>Reflection</h4>
    <p>
      Throughout the class we had the opportunity to use Canvas for handling out
      of class interactions with our peers. We did weekly discussion posts that
      gave me the opportunity to have discussions with others. We also accessed
      our course information through Canvas. I feel like I definitely know how
      to use the system effectively. In the artifact section I've included a
      screenshot of a classmate's response to a post I made. As well as a
      response that I made on another classmate's post.
    </p>
    <h4>Goal</h4>
    <p>
      I plan to keep my knowlege of online learning environments at a high
      level. I also plan to continue to collaborate and enhance my ability to
      communicate with others.
    </p>
  </Layout>
);

export default ObjectiveFour;
