import React from "react";
import { Link } from "gatsby";
import { defaultBtn, activeLinkStyles, gray } from "../utils/variables";

const btnStyles = {
  ...defaultBtn,
  fontSize: "1em",
  padding: "0.25em 0.5em",
};

export default function IntegrationNav() {
  return (
    <nav
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "1em 0",
        backgroundColor: gray,
      }}
    >
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio"
      >
        Portfolio Home{" "}
      </Link>{" "}
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-1"
      >
        Objective 1{" "}
      </Link>{" "}
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-2"
      >
        Objective 2{" "}
      </Link>{" "}
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-3"
      >
        Objective 3{" "}
      </Link>{" "}
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-4"
      >
        Objective 4{" "}
      </Link>{" "}
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-5"
      >
        Objective 5{" "}
      </Link>{" "}
      <Link
        css={btnStyles}
        activeStyle={activeLinkStyles}
        to="/idet/integration-portfolio/obj-6"
      >
        Objective 6{" "}
      </Link>{" "}
    </nav>
  );
}
