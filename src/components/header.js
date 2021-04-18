import React from "react";
import { Link } from "gatsby";
import { green, white, defaultBtn, activeLinkStyles } from "../utils/variables";
import logo from "../assets/logo.svg";

const Header = () => (
  <header
    css={{
      backgroundColor: white,
      padding: "0 2rem 0",
      color: green,
      display: "grid",
      gridTemplateColumns: "0.5fr 1fr",
      gridTemplateRows: "1fr",
      gridTemplateAreas: `"logo nav"`,
      justifyItems: "center",
    }}
  >
    <div
      css={{
        gridArea: "logo",
        flexDirection: "row",
        display: "flex",
        justifyContent: "flex-start",
        justifySelf: "start",
      }}
    >
      <Link
        exact
        to="/"
        css={{
          textDecoration: "none",
          color: green,
          display: "flex",
          flexDirection: "row",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <img
          src={logo}
          alt=""
          css={{
            height: "auto",
            width: "4.25vw",
            display: "inline-block",
            marginBottom: 0,
            marginRight: "1em",
          }}
        />{" "}
        <h1
          css={{
            fontSize: "3vw",
            fontFamily: "Signika",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 0,
          }}
        >
          clay diffrient{" "}
        </h1>{" "}
      </Link>{" "}
    </div>{" "}
    <div
      css={{
        gridArea: "nav",
        display: "flex",
        justifyContent: "start",
        justifySelf: "start",
        alignItems: "center",
      }}
    >
      <Link css={defaultBtn} to="/idet" activeStyle={activeLinkStyles}>
        IDET{" "}
      </Link>{" "}
    </div>{" "}
  </header>
);

export default Header;
