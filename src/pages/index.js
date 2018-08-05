import React from "react";
import { green, white, lighterGreen } from "../utils/variables";
import logo from "../assets/logo.svg";
import mosk from "../assets/mosk-ultra-bold.ttf";
import { css } from "glamor";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import "../components/layout.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faGooglePlus,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

css.global("body", {
  backgroundColor: green
});

css.global("@font-face", {
  fontFamily: "Mosk",
  src: `url(${mosk}) format('truetype')`
});

const linkListStyles = {
  textDecoration: "none",
  color: green,
  "&:hover, &:focus": {
    textDecoration: "underline"
  },
  "&:visited": {
    color: lighterGreen
  }
};

const listItemStyle = { display: "inline", margin: "1rem" };

const IndexHeader = () => (
  <header
    css={{
      backgroundColor: white,
      padding: "1rem 2rem 0",
      color: green,
      display: "grid",
      gridTemplateColumns: "0.5fr 1fr",
      gridTemplateRows: "1fr",
      gridTemplateAreas: `"logo word"`,
      justifyItems: "center"
    }}
  >
    <div
      css={{
        gridArea: "logo",
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
      }}
    >
      <img
        src={logo}
        alt=""
        css={{
          height: "auto",
          width: "12vw"
        }}
      />
    </div>
    <div
      css={{
        gridArea: "word",
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
      }}
    >
      <h1
        css={{
          fontSize: "8vw",
          fontFamily: "Mosk"
        }}
      >
        simply diffrient
      </h1>
    </div>
  </header>
);

const IndexPage = ({ data }) => (
  <>
    <IndexHeader />
    <main
      css={{
        margin: "2rem auto",
        maxWidth: 900,
        backgroundColor: white,
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        gridTemplateAreas: `
          "attention"
          "main"
        `
      }}
    >
      <div
        css={{
          gridArea: "attention",
          display: "grid",
          gridTemplateColumns: "0.6fr 1.4fr",
          gridTemplateRows: "1fr",
          columnGap: "1em",
          gridTemplateAreas: `"image headline"`
        }}
      >
        <div css={{ gridArea: "image" }}>
          <Img
            fluid={data.clayImg.childImageSharp.fluid}
            alt="Clay Diffrient"
            css={{
              height: "auto",
              width: "21vw"
            }}
          />
        </div>
        <div css={{ gridArea: "headline" }}>
          <h2>My name is Clay Diffrient!</h2>
          <p
            css={{
              fontSize: "1.2em"
            }}
          >
            I am{" "}
            <Link to="/about/father" css={linkListStyles}>
              a father
            </Link>, a husband, a Mormon, a software engineer, an instructional
            designer, a educational technologist, a student, and an
            accessibility advocate.
          </p>
        </div>
      </div>
      <div css={{ gridArea: "main" }}>
        <p>
          I'm a senior software engineer at Instructure. I work on the Canvas
          Core Services team helping architect the front end of the Canvas
          Learning Management System. I am passionate about education &mdash;
          specifically the application of technology to enhance education! I'm
          currently working on a M. Ed. in Instructional Design and Educational
          Technlogy at the University of Utah.
        </p>
        <p>
          Sometimes I get a little busy and don't post much here or make things
          nicer, but you can find me online at several different places. The
          following list is a good place to start.
        </p>
        <ul css={{ listStyle: "none" }}>
          <li css={listItemStyle}>
            <a css={linkListStyles} href="https://github.com/claydiffrient">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li css={listItemStyle}>
            <a
              css={linkListStyles}
              href="https://www.linkedin.com/in/claydiffrient"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li css={listItemStyle}>
            <a css={linkListStyles} href="https://twitter.com/claydiffrient">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </li>
          <li css={listItemStyle}>
            <a
              css={linkListStyles}
              href="https://www.facebook.com/clay.diffrient"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </li>
          <li css={listItemStyle}>
            <a
              css={linkListStyles}
              href="https://plus.google.com/+ClayDiffrient"
            >
              <FontAwesomeIcon icon={faGooglePlus} /> Google+
            </a>
          </li>
          <li css={listItemStyle}>
            <a css={linkListStyles} href="https://medium.com/@claydiffrient">
              <FontAwesomeIcon icon={faMedium} /> Medium
            </a>
          </li>
        </ul>
      </div>
    </main>
  </>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    clayImg: file(name: { eq: "clay" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
