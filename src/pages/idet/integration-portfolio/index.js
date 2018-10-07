import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import { defaultBtn } from "../../../utils/variables";
import Link from "gatsby-link";

const navBtnStyle = {
  ...defaultBtn,
  fontSize: "0.9em",
  width: "100%"
};

const IntegrationPortfolio = () => (
  <Layout>
    <Helmet>
      <title>Simply Diffrient - Integration of Ed Tech Portfolio</title>
    </Helmet>
    <h2>Integration of Educational Technology Portfolio</h2>
    <p>
      This portfolio was created as a final project for my ED PS 6446 course
      during the summer of 2018. It presents the reader with a discrete section
      each representing one of the six objectives of the course. On each page, I
      then present evidence and appropriate artifacts supporting the claim that
      I mastered that objective.
    </p>

    <ul css={{ marginTop: "15px", listStyle: "none" }}>
      <li css={{ listStyle: "unstyled" }}>
        <Link to="/idet/integration-portfolio/obj-1" css={navBtnStyle}>
          Objective 1: <br />
          Identify and know how to locate various kinds of technology resources
          and relate them to the teaching process.
        </Link>
      </li>
      <li css={{ listStyle: "unstyled" }}>
        <Link to="/idet/integration-portfolio/obj-2" css={navBtnStyle}>
          Objective 2: <br />
          Identify learning theories and technology tools that support them.
        </Link>
      </li>
      <li css={{ listStyle: "unstyled" }}>
        <Link to="/idet/integration-portfolio/obj-3" css={navBtnStyle}>
          Objective 3: <br />
          Build a personal educational technology integration portfolio with
          evidence and artifacts.
        </Link>
      </li>
      <li css={{ listStyle: "unstyled" }}>
        <Link to="/idet/integration-portfolio/obj-4" css={navBtnStyle}>
          Objective 4: <br />
          Participate in an online learning environment, discussions, and
          tele-collaboration.
        </Link>
      </li>
      <li css={{ listStyle: "unstyled" }}>
        <Link to="/idet/integration-portfolio/obj-5" css={navBtnStyle}>
          Objective 5: <br />
          Understand and apply information literacy strategies to evaluate the
          quality of educational resources and tools.
        </Link>
      </li>
      <li css={{ listStyle: "unstyled" }}>
        <Link to="/idet/integration-portfolio/obj-6" css={navBtnStyle}>
          Objective 6: <br />
          Work effectively with colleagues and individually.
        </Link>
      </li>
    </ul>
  </Layout>
);

export default IntegrationPortfolio;
