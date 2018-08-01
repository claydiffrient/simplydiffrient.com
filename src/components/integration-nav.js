import React from "react";
import { Link } from "gatsby";
import { defaultBtn, activeLinkStyles, gray } from "../utils/variables";

const btnStyles = {
  ...defaultBtn,
  fontSize: "1em",
  padding: "0.25em 0.5em"
};

export default function IntegrationNav() {
  return (
    <nav
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "1em 0",
        backgroundColor: gray
      }}
    >
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio"
        exact
      >
        Portfolio Home
      </Link>
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-1"
        exact
      >
        Objective 1
      </Link>
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-2"
        exact
      >
        Objective 2
      </Link>
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-3"
        exact
      >
        Objective 3
      </Link>
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-4"
        exact
      >
        Objective 4
      </Link>
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-5"
        exact
      >
        Objective 5
      </Link>
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-6"
        exact
      >
        Objective 6
      </Link>
    </nav>
  );
}
