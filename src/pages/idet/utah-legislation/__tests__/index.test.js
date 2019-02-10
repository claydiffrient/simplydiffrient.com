import React from "react";
import { render } from "react-testing-library";
import { axe, toHaveNoViolations } from "jest-axe";
import { StaticQuery } from "gatsby";
import UtahLegislation from "../index";

expect.extend(toHaveNoViolations);

const mockData = {
  allMarkdownRemark: {
    totalCount: 3,
    edges: [
      {
        node: {
          id: "f51389f4-e8e7-5a8c-b18d-840b7ab4f61b",
          frontmatter: {
            title: "Past The House",
            date: "09 February 2019"
          },
          excerpt:
            "In the time since my last post, a great thing has happened! The bill has\nsuccesfully made it out of the House. Let's look at what has…",
          timeToRead: 1
        }
      },
      {
        node: {
          id: "a17736ce-05d9-5b4b-9d40-9cc388e089af",
          frontmatter: {
            title: "Fiscal Report",
            date: "17 January 2019"
          },
          excerpt:
            "The fiscal report came back for H.B. 45. It was made publicly available on\n2019-01-16. I love that this is something that gets put out for…",
          timeToRead: 1
        }
      },
      {
        node: {
          id: "ee33aff8-22a1-5f48-a110-69795fed2d91",
          frontmatter: {
            title: "Utah Legislature Kickoff",
            date: "13 January 2019"
          },
          excerpt:
            "Today I decided to look into what legislation had been filed on the\n Utah Legislature website  to determine a good one to\ntrack. The Bill I…",
          timeToRead: 1
        }
      }
    ]
  }
};

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`
        }
      }
    })
  );
});

test("is accessible", async () => {
  const { container } = render(<UtahLegislation data={mockData} />);
  expect(await axe(container.innerHTML)).toHaveNoViolations();
});
