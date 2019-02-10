const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ to, ...rest }) => {
    const style = { ...rest.activeStyle };
    delete rest.exact;
    delete rest.activeStyle;
    return React.createElement("a", {
      ...rest,
      style,
      href: to
    });
  }),
  StaticQuery: jest.fn()
};
