import * as React from "react";
import { green, white, lighterGreen } from "../utils/variables";
import logo from "../assets/logo.svg";
import { Global } from "@emotion/react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/layout.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faGooglePlus,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  data: {
    clayImg: {
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };
}

const linkListStyles = {
  textDecoration: "none",
  color: green,
  "&:hover, &:focus": {
    textDecoration: "underline",
  },
  "&:visited": {
    color: lighterGreen,
  },
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
      justifyItems: "center",
    }}
  >
    <div
      css={{
        gridArea: "logo",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt=""
        css={{
          height: "auto",
          width: "12vw",
        }}
      />
    </div>
    <div
      css={{
        gridArea: "word",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <h1
        css={{
          fontSize: "11vw",
          fontFamily: "Signika",
        }}
      >
        clay diffrient
      </h1>
    </div>
  </header>
);

const IndexPage = ({ data }: Props) => (
  <>
    <Helmet
      title="Clay Diffrient"
      meta={[
        {
          name: "description",
          content: "Personal website of Clay Diffrient",
        },
        {
          name: "keywords",
          content:
            "clay diffrient, software, programming, edtech, instructional design",
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Global
      styles={{
        body: {
          backgroundColor: green,
        },
      }}
    />
    <IndexHeader />
    <main
      css={{
        margin: "2rem auto",
        maxWidth: 900,
        backgroundColor: white,
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "max-content max-content",
        gridTemplateAreas: `
          "attention"
          "main"
        `,
      }}
    >
      <div
        css={{
          gridArea: "attention",
          display: "grid",
          gridTemplateColumns: "0.6fr 1.4fr",
          gridTemplateRows: "1fr",
          columnGap: "1em",
          gridTemplateAreas: `"image headline"`,
        }}
      >
        <div css={{ gridArea: "image" }}>
          <GatsbyImage
            image={data.clayImg.childImageSharp.gatsbyImageData}
            alt="Clay Diffrient"
            css={{
              height: "auto",
              width: "21vw",
            }}
          />
        </div>
        <div css={{ gridArea: "headline" }}>
          <h2>My name is Clay Diffrient!</h2>
          <p
            css={{
              fontSize: "1.2em",
            }}
          >
            I am{" "}
            <Link to="/about/father" css={linkListStyles}>
              a father
            </Link>
            , a software engineer, an instructional designer, an educational
            technologist, a volunteer teacher, and an accessibility advocate.
          </p>
        </div>
      </div>
      <div css={{ gridArea: "main" }}>
        <p>
          I'm a senior software engineer at{" "}
          <a css={linkListStyles} href="https://derivita.com">
            Derivita
          </a>
          , a first of its kind STEM technology platform and complete computer
          algebra system. At Derivita, I primarily work on the front end of our
          app using lit-html, Google Closure Components, and Material Design
          Lite all in TypeScript. Ocassionally I've been known to reluctantly
          dabble in the Go code that powers the backend.
        </p>
        <p>
          Before working at Derivita, I climbed the engineering ranks at{" "}
          <a css={linkListStyles} href="https://instructure.com">
            Instructure
          </a>
          . At the end of my tenure there, I was one of the top contributors to
          the front end of the{" "}
          <a css={linkListStyles} href="https://instructure.com/canvas">
            Canvas
          </a>{" "}
          Learning Management System primarily focused on front end
          architecture.
        </p>
        <p>
          I am passionate about education &mdash; specifically the application
          of technology to enhance education! I completed a Bachelor's of
          Science in Computer Science at Brigham Young University &mdash; Idaho
          and more recently completed a Master's of Education in Educational
          Psychology (IDET) at the University of Utah.
        </p>
        <p>
          Sometimes I get a little busy and don’t post much here or make things
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
        gatsbyImageData(width: 250, layout: CONSTRAINED)
      }
    }
  }
`;
