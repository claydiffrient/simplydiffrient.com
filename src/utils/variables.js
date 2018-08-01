export const green = "#397837";
export const lighterGreen = "#539251";
export const white = "#ffffff";
export const gray = "#e5e5e5";

export const defaultBtn = {
  textDecoration: "none",
  color: green,
  fontSize: "1.2em",
  padding: "0.5em 1em",
  lineHeight: "2em",
  height: "auto",
  display: "inline-block",
  textAlign: "center",
  backgroundColor: gray,
  "&:hover, &:focus": {
    backgroundColor: green,
    opacity: "0.7",
    color: white
  }
};

export const activeLinkStyles = {
  backgroundColor: green,
  color: white
};

export const linkStyles = {
  textDecoration: "none",
  color: green,
  "&:hover, &:focus": {
    textDecoration: "underline"
  },
  "&:visited": {
    color: lighterGreen
  }
};
